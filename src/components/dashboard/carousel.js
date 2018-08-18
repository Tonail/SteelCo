import React from 'react'

class Carousel extends React.Component {
  render() {
    const slide = [
      { src: require('../../assets/imgs/slide1.png'), alt: '1', value: '1'},
      { src: require('../../assets/imgs/slide2.png'), alt: '2', value: '2'},
      { src: require('../../assets/imgs/slide3.png'), alt: '3', value: '3'}
    ]

    return (
      <div className="carousel">
        <div className="slide" value={slide[0].value}>
          <img src={slide[0].src} alt={slide[0].alt} />
        </div>
        <div className="slide" value={slide[1].value}>
          <img src={slide[1].src} alt={slide[1].alt} />
        </div>
        <div className="slide" value={slide[2].value}>
          <img src={slide[2].src} alt={slide[2].alt} />
        </div>
      </div>
    )
  }
}

export default Carousel
