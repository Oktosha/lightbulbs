import React from 'react';
import ReactDOM from 'react-dom';
import lightbulb_icon from './assets/lightbulb.svg';
import button_icon from './assets/button.svg';
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
        <img class="button" src={button_icon}/>
      );
    }
  }
  
  class Game extends React.Component {
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
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
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