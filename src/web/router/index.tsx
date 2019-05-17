import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon, Layout } from 'antd';
// import App from '../App'
import ajaxRequest from '../libs/ajaxRequest.ts'

const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

function App() {
  return <h2 className="red">App</h2>;
}

function About() {
  return <h2 className="red">About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class AppRouter extends React.Component {
  componentDidMount() {
    // console.log(ajaxRequest)
    // ajaxRequest.request({
    //   method: 'post'
    // })
  }
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Sider>
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
              >
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/about/">About</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/test/page">Users</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
              <Content>
                <div id="content">
                  <Route path="/" exact component={App} />
                  <Route path="/about/" component={About} />
                  <Route path="/test/page" component={Users} />
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
