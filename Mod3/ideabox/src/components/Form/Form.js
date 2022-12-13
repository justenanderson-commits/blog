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
    this.setState({ title: '', description: ''})
  }

  render() {
    return (
      <form>
       <h2>Add a new idea!</h2>
       <input
        type="text"
        name="title"
        placeholder="  Title"
        value={this.state.title}
        onChange={event => this.handleChange(event)}
       />

       <input
        type="text"
        name="description"
        placeholder="  Description"
        value={this.state.description}
        onChange={event => this.handleChange(event)}
       />

       <button onClick={event => this.submitIdea(event)}>Submit</button>
      </form>
    )
  }
}

export default Form