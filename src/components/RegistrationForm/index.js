// Write your JS code here
import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    firstNameError: '',
    lastNameError: '',
  }

  validateInput = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        this.setState({firstNameError: 'Required'})
      }
      if (lastName === '') {
        this.setState({lastNameError: 'Required'})
      }
    } else {
      this.setState({
        isSubmitted: true,
        firstName: '',
        lastName: '',
        firstNameError: '',
        lastNameError: '',
      })
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstNameError: ''})
    }
  }

  validateLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({lastNameError: ''})
    }
  }

  reset = () => {
    this.setState({isSubmitted: false})
  }

  render() {
    const {
      firstName,
      lastName,
      isSubmitted,
      firstNameError,
      lastNameError,
    } = this.state

    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">Registration</h1>
          {isSubmitted ? (
            <div className="card2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="image1"
              />
              <p className="p2">Submitted Successfully</p>
              <button className="button" type="button" onClick={this.reset}>
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.validateInput} className="card1">
              <div className="nameInput">
                <label className="label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  value={firstName}
                  className={`input ${firstNameError}`}
                  onChange={this.updateFirstName}
                  onBlur={this.validateFirstName}
                  type="text"
                  id="firstName"
                  placeholder="First name"
                />
                <p className="error">{firstNameError}</p>
              </div>
              <div className="nameInput">
                <label className="label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  value={lastName}
                  className={`input ${lastNameError}`}
                  onChange={this.updateLastName}
                  onBlur={this.validateLastName}
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                />
                <p className="error">{lastNameError}</p>
              </div>
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
