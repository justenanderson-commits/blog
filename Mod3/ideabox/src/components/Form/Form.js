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
      <div>
        <form className="container--input-form">
          <input type="text"></input>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form