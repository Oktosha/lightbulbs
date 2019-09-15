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
        <img
          class="lightbulb" 
          src={
            this.props.value
              ? lightbulb_icon
              : lightbulb_inactive_icon
          }
        />
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
          onClick={this.props.onClick}
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
    handleClick(i) {
        const buttons = this.state.buttons.slice();
        buttons[i] = !buttons[i];
        this.setState({buttons: buttons});
    }
    renderButton(i) {
        return(
          <Button 
            value={this.state.buttons[i]}
            onClick={() => this.handleClick(i)}/>);
    }
    render() {
      let lightbulbsState = getLightbulbsState(this.state.buttons);
      return (
        <div>
            <div class="status">
                {isVictory(this.state.buttons)
                 ? <p class="victory">Victory!</p>
                 : <p>Turn on all the lights!</p>
                }
            </div>
            <div class="panel">
                <div class="lightbulbs">
                    <Lightbulb value={lightbulbsState[0]}/>
                    <Lightbulb value={lightbulbsState[1]}/>
                    <Lightbulb value={lightbulbsState[2]}/>
                    <Lightbulb value={lightbulbsState[3]}/>
                    <Lightbulb value={lightbulbsState[4]}/>
                    <Lightbulb value={lightbulbsState[5]}/>
                    <Lightbulb value={lightbulbsState[6]}/>
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

  function getLightbulbsState(buttons) {
    const buttonMasks = [
        [1, 0, 1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1]
    ];
    let lightbulbsState = Array(7).fill(false);
    for (let i = 0; i < buttons.length; ++i) {
        if (buttons[i]) {
            for (let j = 0; j < 7; ++j) {
                lightbulbsState[j] ^= buttonMasks[i][j];
            }
        }
    }
    return lightbulbsState;
  }

  function isVictory(buttons) {
    let lightbulbsState = getLightbulbsState(buttons);
    let ans = true;
    for (let i = 0; i < 7; ++i) {
        ans = ans && lightbulbsState[i];
    }
    return ans;
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );