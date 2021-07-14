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
      maxValue: localStorage.getItem("maxValue")
        ? Number(localStorage.maxValue)
        : Infinity,
      minValue: localStorage.getItem("minValue")
        ? Number(localStorage.minValue)
        : 0,
      step: localStorage.getItem("step") ? Number(localStorage.step) : 1,
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
    localStorage.setItem("maxValue", Infinity);
    localStorage.setItem("minValue", 0);
    localStorage.setItem("step", 1);
    this.setState({
      countVal: 0,
      maxValue: Infinity,
    });
  };

  handleMaxInputValue = (e) => {
    localStorage.setItem("maxValue", e.target.value);
    this.setState({
      maxValue: Number(e.target.value),
    });
  };

  handleMinInputValue = (e) => {
    localStorage.setItem("minValue", e.target.value);
    this.setState({
      minValue: Number(e.target.value),
    });
  };

  handleStepValue = (e) => {
    localStorage.setItem("step", e.target.value);
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
            inputValue={localStorage.getItem("minValue")}
          />
          <CounterInput
            inputHandler={this.handleMaxInputValue}
            name="maxValue"
            inputValue={localStorage.getItem("maxValue")}
          />
          <CounterInput
            inputHandler={this.handleStepValue}
            name="step"
            inputValue={localStorage.getItem("step")}
          />
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
