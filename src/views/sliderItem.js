import React from 'react'
export default class SliderItem extends React.Component {
  render(){
    let { item,index:i } = this.props
    return (
      <li className='slide-item' key={i} >
        <img src={item.src} alt=""></img>
      </li>
    )
  }
}