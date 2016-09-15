import React, {Component} from 'react'

class Star extends Component {
  render(){
    var s = 'fa fa-star';
    if(!this.props.selected){
      s+='-o'
    }
    return (
      <i {...this.props} className={s}></i>
    )
  }
}

class Rating extends Component {
  constructor(props){
    super(props)
    this.state = {
      rating: 0,
      hover: null
    }
  }
  handleOver(id){
    this.setState({
      hover: id + 1
    })
  }
  handleOut(id){
    this.setState({
      hover: null
    })
  }
  handleClick(id){
    this.setState({
      rating: id + 1
    })
  }
  render(){
    var lengthStars = 5;
    var stars = [];
    for (var i = 0; i < lengthStars; i++) {
      var r = this.state.hover != null ? this.state.hover : this.state.rating;
      var selected = (i < r);
      stars.push(
        <Star key={i} selected={selected}
          onMouseOver={this.handleOver.bind(this, i)}
          onMouseOut={this.handleOut.bind(this, i)}
          onClick={this.handleClick.bind(this, i)}
        />
      )
    }
    return (<div>
      {stars}
    </div>)
  }
}

export default Rating
