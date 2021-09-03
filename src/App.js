import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 47,
      text: ''
    };
  }
  handleClick = () => {
    // this.setState({meaningOfLife: this.state.meaningOfLife + 1});
    // setState is async so this might not give us what we want
    this.setState(
      (prevState, prevProps) => {
        return {
          meaningOfLife: prevState.meaningOfLife + prevProps.increment,
        };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };
  handleTextClick = () => {
    this.setState((prevState, prevProps) =>{return {text: prevState.text + '_hello'}});
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate!', nextProps.text );
    return nextState.text !== this.state.text
}
  render() {
    return (
      <div className="App">
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
