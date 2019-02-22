import React, {Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';

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
      <div className='overlay'>
        <UncontrolledCarousel items={items}/>
      </div>
    );
  }
}

export default Header;
