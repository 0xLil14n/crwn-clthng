import logo from "./logo.svg";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { StyledApp } from "./App.styles";
import { Route, Switch, Link } from "react-router-dom";
const TopicsList = (props) => (
  <div>
    <h1>TopicsList Page</h1>
    <ul>
      <li><Link to={`${props.match.url}/1`}>1</Link></li>
      <li><Link to={`${props.match.url}/11`}>2</Link></li>
      <li><Link to={`${props.match.url}/111`}>3</Link></li>
    </ul>
  </div>
);

const TopicsDetail = props => {
  console.log("prasdfops: ", props);
  return (<div>
    <h1>TopicsDetail Page for Topic {props.match.params.topicId}</h1>
    
  </div>);
}
const DiffHomePage = (props) => {
  console.log("props: ", props);
  return (
    <div>
      <h1>Home Page: {props.location.pathname}</h1>
      <Link to='/topics'>Topics</Link>
    </div>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
  <StyledApp>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/womens" component={TopicsList} />
        <Route exact path="/topics/:topicId" component={TopicsDetail} />
      </StyledApp>
    );
  }
}

export default App;
