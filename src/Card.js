import React, { Component } from 'react'
import Heart from './HeartButton'
import Stars from './StarsButton'

class Card extends Component {
  render(){
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 card-bottom">
        <img className="image-card" src={this.props.img} alt={this.props.place}/>
        <div className="description">
          <Heart />
          <div className="titlePlace">
            <span>{this.props.place}</span>
            <span>{this.props.title}</span>
          </div>
          <div className="twoColumns">
            <div className="column-1 column-left">
              <Stars />
              <span>{this.props.discount}</span>
            </div>
            <div className="column-1">
              <span className="oldPrice">{this.props.oprice}</span>
              <span className="currentPrice">{this.props.price}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
