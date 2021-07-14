// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CounterButton from "./components/Button";
import CounterInput from "./components/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countVal: localStorage.getItem("countVal")
        ? Number(localStorage.countVal)
        : 0,
      maxValue: Infinity,
      minValue: 0,
      step: 1,
    };
  }

  increaseValue = () => {
    if (this.state.countVal + this.state.step <= this.state.maxValue) {
      this.setState((prevState) => {
        localStorage.setItem("countVal", prevState.countVal + this.state.step);
        return {
          countVal: prevState.countVal + this.state.step,
        };
      });
    }
  };

  decreaseValue = () => {
    if (this.state.countVal - this.state.step >= this.state.minValue) {
      this.setState((prevState) => {
        localStorage.setItem("countVal", prevState.countVal - this.state.step);
        return {
          countVal: prevState.countVal - this.state.step,
        };
      });
    }
  };

  resetValue = () => {
    localStorage.setItem("countVal", 0);
    this.setState({
      countVal: 0,
    });
  };

  handleMaxInputValue = (e) => {
    this.setState({
      maxValue: Number(e.target.value),
    });
  };

  handleMinInputValue = (e) => {
    this.setState({
      minValue: Number(e.target.value),
    });
  };

  handleStepValue = (e) => {
    this.setState({
      step: Number(e.target.value),
    });
  };

  render() {
    return (
      <div className="counterDiv">
        <div>
          <CounterInput
            inputHandler={this.handleMinInputValue}
            name="minValue"
          />
          <CounterInput
            inputHandler={this.handleMaxInputValue}
            name="maxValue"
          />
          <CounterInput inputHandler={this.handleStepValue} name="step" />
        </div>
        <h1>{this.state.countVal}</h1>
        <div>
          <CounterButton
            disabled={
              this.state.countVal - this.state.step < this.state.minValue
            }
            clicked={this.decreaseValue}
            type="Decrease"
          />
          <CounterButton
            disabled={
              this.state.countVal + this.state.step > this.state.maxValue
            }
            clicked={this.increaseValue}
            type="Increase"
          />
          <CounterButton clicked={this.resetValue} type="Reset" />
        </div>
      </div>
    );
  }
}

export default App;
