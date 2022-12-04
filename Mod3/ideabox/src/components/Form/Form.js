import React from 'react'
import './Form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    /* looks like this needs to be fixed to properly update state */
    this.setState({ [event.target.name]: event.target.value })
  }

  submitIdea = event => {
    event.preventDefault()

    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
        <form className="container--input-form">
          <input 
            type="text" 
            placeholder=" Title"  
            name="title" 
            value={this.state.title}
            onChange={event => this.handleChange(event)}
            
          />
          
          <input 
          type="text" 
          placeholder='  Description' 
          name='description' 
          value={this.state.description}
          onChange={event => this.handleChange(event)}
          />
          
          <button onClick={ event => this.submitIdea(event) }>Submit</button>
        </form>
    )
  }
}

export default Form