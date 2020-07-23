import React from 'react';
import Head from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col, List, Icon, Breadcrumb, Affix} from 'antd'
import '../static/style/pages/detailed.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'

const Detailed = (data) => {
  
  return (
    <>
      <Head>

      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="break-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/list">{data.typeName}列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>XXXXX</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              {data.title}
            </div>
            <div class="list-icon center">
                <span><Icon type="calender"/> 2020-07-22 </span>
                <span><Icon type="folder"/> 视频教程 </span>
                <span><Icon type="fired"/> 1000 </span>
            </div>
            <div className="detailed-content">
              <ReactMarkdown source={data.article_content}
              escapeHtml={false}></ReactMarkdown>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
          <Affix offsetTop={5}> 
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <MarkNav
            className="article-menu"
            source={data.article_content}
            headingTopOffset={0}
            ordered={false}
            ></MarkNav>
          </div>
          </Affix>
         
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}

export  default Detailed

Detailed.getInitialProps = async (context) => {
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios.get('http://127.0.0.1:7001/default/getArticleById/' + id).then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  }) 
  return await promise
}