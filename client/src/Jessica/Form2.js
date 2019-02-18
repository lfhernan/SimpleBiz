import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Box from './Box';

class Form2 extends Component {

  constructor(props){
    super(props)
    this.state={
        name: '',
        width: '1',
        color: 'red',
        textColor: 'black',
        boxes: []
    }
  }

  handleInput = (e)=>{
    const val = e.target.value;
    const type = e.target.name;

    this.setState({
        [type]: val
    })

    console.log(this.state)
  }

  handleSubmit = ()=>{
      const {name,width,color,textColor, boxes} = this.state;

      const obj = {name,width,color,textColor}

      this.setState({
          boxes: boxes.concat(obj)
      })
  }
  render() {

    const box = this.state.boxes.map(({name,width,color,textColor},index)=>{
        return <Box key={index} name={name} width={width} color={color} textColor = {textColor}></Box>
    })
    return (
        <Fragment>
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
      <div className="container">
          <div className="row">
            <Box></Box>
          </div>
        </div>
      </Fragment>

    );
  }
}

export default Form2;
