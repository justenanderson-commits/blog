import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
        <form className="container--input-form">
          <input type="text" placeholder=" title" name="title" value={this.state.title}></input>
          <input type="text" placeholder='  description' name='title' value={this.state.description}></input>
          <button>Submit</button>
        </form>
    )
  }
}

export default Form