import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

    this.handleImages = this.handleImages.bind(this);

  }

  componentDidMount(){
    this.handleImages()
  }

  handleImages(){
    let images = [];
    this.state.images.map((image)=>{
      images.push({
        'original': require('../images/'+image),
        'thumbnail': require('../images/'+image)
      })
    });
    this.setState({images});
  }
  

  

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

