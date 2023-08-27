import { PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      greet: "Good Morning",
    };
  }

   Change= ()=>{
  this.setState({
    greet: "Good Morning"
  })
  }
  render() {
    console.log("I am render")
    return (
      <div>
        <h1>PureComponent</h1>
        <h3> Message : {this.state.greet}</h3>
        <button onClick={this.Change}>Change Message</button>
      </div>
    );
  }
}
