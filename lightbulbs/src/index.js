import React from 'react';
import ReactDOM from 'react-dom';
import lightbulb_icon from './assets/lightbulb.svg';
import lightbulb_inactive_icon from './assets/lightbulb-inactive.svg';
import button_icon from './assets/button.svg';
import button_inactive_icon from './assets/button-inactive.svg';
import './index.css';

class Lightbulb extends React.Component {
    render() {
      return (
        <img class="lightbulb" src={lightbulb_icon}/>
      );
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <img
          className="button"
          src={
            this.props.value
              ? button_icon
              : button_inactive_icon
          }
        />
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: Array(7).fill(false),
        }
    }
    renderButton(i) {
        return <Button value={this.state.buttons[i]}/>
    }
    render() {
      return (
        <div>
            <div class="status">
                <p>Turn on all the lights!</p>
            </div>
            <div class="panel">
                <div class="lightbulbs">
                    <Lightbulb/>
                    <Lightbulb/>
                    <Lightbulb/>
                    <Lightbulb/>
                    <Lightbulb/>
                    <Lightbulb/>
                    <Lightbulb/>
                </div>
            </div>
            <div class="panel">
                <div class="buttons">
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                </div>
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );