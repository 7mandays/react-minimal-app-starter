import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import AddMessage from '../containers/AddMessage'
import MessageList from '../containers/MessageList'
import MessageDetail from '../containers/MessageDetail'

const Page = ({children}) => (
  <div>
    <ul role="nav">
      <li><Link to="/messages">messages</Link></li>
      <li><Link to="/about">about</Link></li>
    </ul>
    {children}
  </div>
)

const Messages = () => (
  <div>
    <AddMessage />
    <MessageList />
  </div>
)

const About = () => (
  <div>
    About
  </div>
)

const App = () => (
  <Router history={browserHistory}>
      <Route path="/" component={Page}>
        <IndexRoute component={Messages}/>
        <Route path="/messages" component={Messages}></Route>
        <Route path="/messages/:id" component={MessageDetail}></Route>
        <Route path="/about" component={About}></Route>
      </Route>
  </Router>
)

export default App
