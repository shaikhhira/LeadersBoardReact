import React from "react";
import "./adminStyle.css";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: 0
    };
  }

  // this fucntion run for getting the value from the prsps otherwose it shows error this function runs when page reload completely
  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1,
        success: 0
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({
            success: true
          });
        } else if (this.state.score < 340) {
          this.setState({
            success: false
          });
        } else {
          this.setState({
            success: 0
          });
        }
      }
    );
  }

  subScore() {
    this.setState(
      {
        score: this.state.score - 1,
        success: 0
      },
      () => {
        if (this.state.score < 340) {
          this.setState({
            success: false
          });
        } else if (this.state.score >= 350) {
          this.setState({
            success: true
          });
        } else {
          this.setState({
            success: 0
          });
        }
      }
    );
  }
  render() {
    const isSuccess = this.state.success;
    let text;
    if (isSuccess === true) {
      text = <span className="succBtn">SUCCESS</span>;
    } else if (isSuccess === false) {
      text = <span className="failBtn">FAIL</span>;
    } else {
      text = "";
    }
    return (
      <div className="admin">
        <div className="left">
          <h3>
            {this.props.name}
            <button onClick={() => this.addScore()}>+</button>
            <button onClick={() => this.subScore()}>-</button>
          </h3>
          <p>
            {this.props.university}
            {text}
          </p>
        </div>
        <div className="right">
          <h3>{this.state.score}</h3>
        </div>
      </div>
    );
  }
}
export default Admin;
