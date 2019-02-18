import React,{Component,Fragment} from 'react';
import Test from './test'
import NavBar from './components/NavBar/NavBar'

class App extends Component
{
  render()
  {
    return (
      <Fragment>
        <NavBar />
        <h1>Welcome</h1>
        <Test />
      </Fragment>
    );
  }
}

export default App
