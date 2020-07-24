import React from 'react';
import Head from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {Row, Col, List, Icon, Breadcrumb, Affix} from 'antd'
import '../static/style/pages/detailed.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'

const Detailed = (props) => {  
const renderer = new marked.Renderer();
const tocify = new Tocify()
renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }
  }); 

  let markHtml = marked(props.article_content) 

  return (
    <>
      <Head>

      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="break-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/list">{props.typeName}列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>XXXXX</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              {props.title}
            </div>
            <div class="list-icon center">
                <span><Icon type="calender"/> 2020-07-22 </span>
                <span><Icon type="folder"/> 视频教程 </span>
                <span><Icon type="fired"/> 1000 </span>
            </div>
            <div className="detailed-content"
            dangerouslySetInnerHTML={{__html: markHtml}}>
        
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
          <Affix offsetTop={5}> 
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            {tocify && tocify.render()}
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
    axios.get(servicePath.getArticleById + '/' + id).then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  }) 
  return await promise
}