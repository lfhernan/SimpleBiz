import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Demo2 extends Component {

  constructor(props){
      super(props)
      this.state ={
          name: '',
          width: 1,
          color: 'red',
          textColor: 'black',
          boxes: []
      }
  }


  handleInput = (e) =>{
      const value = e.target.value
      const type = e.target.name

      this.setState({
          [type]: value
      })

      console.log(this.state)
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const {name,width,color,textColor} = this.state

    this.setState({
        boxes: this.state.boxes.concat({name,width,color,textColor})
    })
    console.log(this.state)
  }



  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Box Name</Label>
          <Input onChange={this.handleInput} type="text" name="name" placeholder="Please enter some text" />
        </FormGroup>
        <FormGroup>
          <Label>Width</Label>
          <Input onChange={this.handleInput} type="select" name="width">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Label>Background Color</Label>
          <Input onChange={this.handleInput} type="select" name="color">
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>yellow</option>
            <option>pink</option>
          </Input>
          <Label>Text Color</Label>
          <Input onChange={this.handleInput} type="select" name="textColor">
            <option>black</option>
            <option>white</option>
            <option>grey</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit}>
            Add Box
        </Button>
      </Form>
    );
  }
}

export default Demo2;