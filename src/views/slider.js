import React from 'react'
import SliderItem from './sliderItem'
import Dots from './Dots'
import './slider.css'
export default class Silder extends React.Component {
  constructor(){
    super()
    this.state={
      index:0
    }
  }
  componentDidMount(){
    if(this.props.autoplay){
      //自动轮播
      this.play()
    }
  }
  play(){
    this.$timer = setInterval(()=>{
      this.turn(1)
    },this.props.delay*1000)
  }
  turn =(step)=>{
    let index = this.state.index + step 
    if(index>this.props.items.length){
      this.$sliders.style.transitionDuration ='0s'
      this.$sliders.style.left =0
      setTimeout(()=>{
        this.$sliders.style.transitionDuration =this.props.speed+'s'
        index =1;
        this.setState({
          index:index
        })
      },0)
      return;
    }
    if(index<0){
      this.$sliders.style.transitionDuration ='0s'
      this.$sliders.style.left =-500*this.props.items.length +'px'
      setTimeout(()=>{
        this.$sliders.style.transitionDuration =this.props.speed+'s'
        index=this.props.items.length-1
        this.setState({
          index:index
        })
      },0)
      return;
    }
    this.setState({
      index:index
    })
  }
  render(){
    let style ={
      width:(this.props.items.length+1)*500,
      left:this.state.index*-500,
      transitionDuration:this.props.speed +'s'
    }
    return (
      <div className="slider-wrapper" onMouseEnter={()=>clearInterval(this.$timer)} onMouseLeave={()=>this.play()}>
        <ul className="sliders" style={style} ref={sliders=>this.$sliders=sliders}>
          {
            this.props.items.map((item,i)=>{
              return <SliderItem item={item} index={i} key={i}></SliderItem>
            })
          }
          <SliderItem item={this.props.items[0]} index={this.props.items.length} key={this.props.items.length}></SliderItem>
        </ul>
        <div className="slider-arrows">
          <span className="arrow arrow-left" onClick={()=>this.turn(-1)}>&lt;</span>
          <span className="arrow arrow-right" onClick={()=>this.turn(1)}>&gt;</span>
        </div>
        <Dots items={this.props.items} turn={this.turn} index={this.state.index}></Dots>
      </div>
    )
  }
}