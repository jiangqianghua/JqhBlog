// 公共头部组件
import React from 'react';
import '../static/style/components/header.css';

import {Row, Col, Menu, Icon} from 'antd'
const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} xs={24} sm={24} md={10} lg={15} xl={11}>
                    <span className="header-logo">小江的blog</span>
                    <span className="header-txt">欢迎使用搜索资源网</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu  mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home"/>
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtube"/>
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile"/>
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header