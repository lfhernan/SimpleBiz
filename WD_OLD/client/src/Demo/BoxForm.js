import React, { Component,Fragment } from 'react';
import Box from './Box'

class BoxForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            currName: '',
            boxes: [],
        }
    }

    handleName = (e)=>{
        let name = e.target.value
        this.setState({
            currName: name
        })
        console.log(this.state.currName)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let name = this.state.currName;

        if(name.length > 5){
            let boxes = this.state.boxes.concat(name)
            this.setState({
                boxes: boxes
            })
            console.log(this.state)
        }
    }

  render() {
      let theBoxes = this.state.boxes.map((name,index)=> {
          return <Box name={name} key={index} />
      })
    return (
      <Fragment>
            <form>
                <h1>Add a Box</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input value={this.state.currName} onChange={this.handleName} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <button onClick={this.handleSubmit} className="btn btn-primary">Add Box</button>
                <div className="container">
                    <div className="row">
                        {theBoxes}
                    </div>
                </div>
            </form>
      </Fragment>
    );
  }
}

export default BoxForm;
