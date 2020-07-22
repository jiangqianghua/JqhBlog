import {Avatar, Divider} from 'antd';
import '../static/style/components/author.css'
import { UserOutlined } from '@ant-design/icons'
const Author = () => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2064084976,2242773320&fm=11&gp=0.jpg"></Avatar>
                <div className="author-introduction">
                专注于WEB和移动前端开发
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<UserOutlined />} className="account"></Avatar>
                <Avatar size={28} icon="qq" className="account"></Avatar>
                <Avatar size={28} icon="wechat" className="account"></Avatar>
                </div>
            </div>
        </div>
    )
}

export default Author