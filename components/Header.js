// 公共头部组件
import React, { useState, useEffect } from 'react';
import '../static/style/components/header.css';
import servicePath from '../config/apiUrl'
import axios from 'axios';
import Router from 'next/router';

import {Row, Col, Menu, Icon} from 'antd'
const Header = () => {
    const[navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    // setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/index')
        } else {
            Router.push('/list?id='+e.key)
        }
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} xs={24} sm={24} md={10} lg={15} xl={11}>
                    <span className="header-logo">小江的blog</span>
                    <span className="header-txt">欢迎使用搜索资源网</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu  mode="horizontal"
                    onClick={handleClick}>
                        <Menu.Item key="0">
                            <Icon type="home"/>
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type="home"/>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header