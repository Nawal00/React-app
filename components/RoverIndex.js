import React from 'react'
import axios from 'axios'

import 'bulma'

import RoverCard from './RoverCard'

class RoverIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rovers: [],
      roverName: '',
      popupActive: false,
      nameError: ''
    }

    this.togglePopUp = this.togglePopUp.bind(this)
    this.handleChange =  this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:4444/rovers')
      .then(res => this.setState({ rovers: res.data}))
  }

  togglePopUp(e) {
    e.preventDefault()
    this.setState({ popupActive: !this.state.popupActive })
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  // validate form
  validate(){
    let nameError = ''

    if(!this.state.roverName) {
      nameError = 'name cannot be blank'
    }
    //return false if nameError is blank
    if (nameError) {
      this.setState({ nameError })
      return false
    }
    return true
  }

  //handle form submit
  handleSubmit(e) {
    const name = this.state.roverName
    const isValid = this.validate()
    e.preventDefault()

    if(isValid){
      axios.post(`http://localhost:4444/add-rover/${name}`)
      axios.get('http://localhost:4444/rovers')
        .then(res => this.setState({ rovers: res.data }))
        //clear form value, error, toggle popup
        .then(this.setState({ nameError: true , popupActive: false, roverName: ''}))
    }
  }

  render() {
    (!this.state) ? <p> Loading </p> : ''
    console.log(this.state)
    return (
      <div>
        <div className="hero is-info">
          <div className="hero-body">
            <h1 className="title is-2"> Mars Rovers </h1>
          </div>
        </div>
        <div className="container">
          <section className="section">
            <div className="columns has-text-centered is-multiline">
              {this.state.rovers.map((rover, i) =>
                <div key={i} className="column is-one-quarter">
                  <RoverCard {...rover} />
                </div>
              )}
            </div>
          </section>

          <div className={`modal ${this.state.popupActive ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <label className="label">Launch new rover to mars</label>
                      <input
                        className="input"
                        name="roverName"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={this.state.roverName}
                      />
                      <div className="error"> {this.state.nameError} </div>
                    </div>
                  </div>
                  <div className="modal-btn">
                    <button className="button" onClick={this.togglePopUp}> Cancel </button>
                    <button className="button"> Launch </button>
                  </div>
                </form>
              </div>
            </div>
            <button className="modal-close" onClick={this.togglePopUp}></button>
          </div>
        </div>

        <footer>
          <div className="hero has-background-light">
            <div className="hero-body">
              <div className="container new-rover-btn">
                <button className= "button" onClick={this.togglePopUp}>New Rover</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default RoverIndex
