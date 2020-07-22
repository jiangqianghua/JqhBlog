import React from 'react';
import Head from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col, List, Icon, Breadcrumb} from 'antd'
import '../static/style/pages/detailed.css'
const Detailed = () => {
  return (
    <>
      <Head>

      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="break-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/list">视频列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>XXXXX</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              React实战视频教程-小江的Blog开发
            </div>
            <div class="list-icon center">
                <span><Icon type="calender"/> 2020-07-22 </span>
                <span><Icon type="folder"/> 视频教程 </span>
                <span><Icon type="fired"/> 1000 </span>
            </div>
            <div className="detailed-content">
              markdown
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}

export  default Detailed