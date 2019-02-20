import React, { Component } from 'react';

const styles = {
    height: '100%!' ,
    width: '100%!',
    backgroundImage: 'url("http://1.bp.blogspot.com/-cXzhLJTSrFM/VmMEeCCE_5I/AAAAAAAACHc/3bjbi56-AoM/s1600/a-crosswalk-on-a-busy-street-new-york-city-united-states1152_12837314014-tpfil02aw-31089-1.jpeg")',
    /* Center and scale the image nicely */
    backgroundPosition: 'center!',
    backgroundRepeat: 'no-repeat!',
    backgroundSize: 'contain!',
    display: 'inline!',
    position: 'relative!'
}

const text = {
    textAlign: 'center'
}

const overlay = {
    zIndex: '1',
    height: '100%',
    width: '100%',
    position: 'fixed',
    overflow: 'auto',
    background: 'rgba(0, 0, 0, 0.0)' /*can be anything, of course*/
}

class Header extends Component 
{
  render() 
  {
    return (
      <div className="App-Header-Overlay" style={overlay}>
        <div className="App-Header" style={styles}>
            <div className='App-Header-test' style={text}>
                <h3>CTA</h3>
                <p>this is just test</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
