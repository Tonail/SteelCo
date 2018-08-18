import React from 'react'

export default class Carousel extends React.Component {
  
  
  constructor(){
    super()
    
    this.state = {
      idx: 0,
      slide: [
        { src: require('../../assets/imgs/slide1.png'), alt: '0', value: '0' },
        { src: require('../../assets/imgs/slide2.png'), alt: '1', value: '1' },
        { src: require('../../assets/imgs/slide3.png'), alt: '2', value: '2' }
      ]
    }
  }
  generateSlide = () => {
    console.log('called', this)
    return
    (<div className="slide" value={slide[0].value}>
      <img src={slide[0].src} alt={slide[0].alt} />
    </div>)
  }  
  nextSlide = idx => {

  }
  render() {

    const {slide} = this.state 
 
   
    return <div className="carousel">{this.generateSlide()}</div>;
  }
}

