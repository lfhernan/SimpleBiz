import React, {Component,Fragment} from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const CarouselProperties = {
  position: 'relative',
  textAlign: 'center'
}

const overlay = {
  background: 'rgba(0,0,200,.3)',
    position: 'absolute',
    top: '0px',
    left:'0px',
    bottom: '0px',
    right: '0px'
}
/* TODO MIGHT WANT TO CHANGE PICTURES AND DESCRIPTIONS*/ 
const items = [
  {
    src: 'https://www.epichotel.com/images/1700-960/downtown-miami-header-255095f7.jpg',
    altText: 'Slide 1',
    caption: 'This is where your business grows',
    header: 'Big boys club'
  },
  {
    src: 'https://thenypost.files.wordpress.com/2018/08/asians_scene_party1a.jpg?quality=90&strip=all',
    altText: 'Slide 2',
    caption: 'happy and cheerful',
    header: 'The Good Life'
  },
  {
    src: 'https://teamkgsr.com/wp-content/uploads/2018/11/sucesfull-business.jpg',
    altText: 'Slide 3',
    caption: 'Instant Results',
    header: 'Achieve Success Here'
  }
];


class Header extends Component 
{
  render() 
  {
    return (
      <Fragment>
        <div className='Carousel' style={CarouselProperties}>
          <UncontrolledCarousel items={items}/>
          <div className='overlay' style={overlay}></div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
