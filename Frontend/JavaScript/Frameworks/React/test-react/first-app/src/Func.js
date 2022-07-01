import React, { Component } from 'react'

export default class seeMe extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      };

      this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            visibility: !state.visibility
        }));
    }
  render(){
  if(this.state.visibility){
    return (
      <div>
        <h1>See me???</h1>
        <button onClick={this.handleClick}>Show me</button>
      </div>
    );
  } else{
    return(
        <div>
    <button onClick={this.handleClick}>Show me</button>
    </div>
    )
  }
}
}

