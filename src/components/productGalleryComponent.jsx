import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from "../images/Adicolor_Classics_3-Stripes_T-Shirt_Brown_HE9548_23_hover_model.jpg"

const test = [{
  "original": image
}]
class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: false,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: false,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: true,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
      disableThumbnailScroll: false,

      images: this.props.product.images,
    };

  }

  // componentDidMount(){
  //   const images = [],
  //   this.state.images.map((image)=>{
  //     images.push({
  //       'original': require('../images/img2.jpg'),
  //       'thumbnail': require('../images/img2.jpg')
  //     })
  //   });
  //   this.setState({images});
  // }
  

  

  render() {
    return <ImageGallery items={this.state.images}
        showThumbnails={this.state.showThumbnails}
        disableThumbnailScroll={this.state.disableThumbnailScroll}
        showNav={this.state.showNav}
        slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        showFullscreenButton= {this.state.showPlayButton}
        showPlayButton={this.state.showPlayButton} />;
  }
}

export default ProductGallery;

