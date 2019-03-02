import React, { Component, Fragment } from 'react';

export const add = () => {

}

class Test extends Component {
  state = {
    name: '',
    age: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addUser(this.state)
  }

  formattedUserName = (name) => `${name}님`

  render() {
    const { users } = this.props;

    return (
      <Fragment>
        {users.map(({ name, age }) => (
          <div key={`${name}:${age}`}>
            이름: {this.formattedUserName(name)}
            나이: {age}
          </div>
        ))}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Test__name">
            이름:
            <input
              id="Test__name"
              name="name"
              type="text"
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="Test__age">
            나이:
            <input
              id="Test__age"
              name="age"
              type="number"
              onChange={this.onChange}
            />
          </label>
          <button type="submit">입력</button>
        </form>
      </Fragment>
    );
  }
}

export default Test;
