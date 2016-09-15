import React, {Component} from 'react';

class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  handleClick(){
    this.setState({
      active: !this.state.active
    })
  }
  render(){
    let heart = this.state.active ? 'fa fa-heart heart-red' : 'fa fa-heart-o';
    return (
      <span className="heartIcon" onClick={this.handleClick.bind(this)}>
        <i className={heart}></i>
      </span>
    )
  }
}

export default HeartButton
