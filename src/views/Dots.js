import React from 'react'
export default class Dots extends React.Component {

  render(){
    return (
      <div className="slider-dots">
          {
            this.props.items.map((item,i)=>{
              return <li className={"dot-item "+(i === this.props.index||(this.props.index===this.props.items.length&&i===0)?'active':'')} onClick={()=>this.props.turn(i-this.props.index)} key={i} ></li>
            })
          }
      </div>
    )
  }
}