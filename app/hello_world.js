import React, { Component } from 'react';
import Greeting from './greeting';
import UserList from './user_list';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Greetings', nickname: '' };
    this.frenchify = this.frenchify.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
  handleChange() {
    this.setState({ nickname: this.refs.nickname.value });
  }
  render() {
    return (
      <div className="hello-world">
        <h1>
          <Greeting greeting={this.state.greeting} name={this.props.name} />
        </h1>
        <p>Nickname: {this.state.nickname}</p>
        <button onClick={this.frenchify}>Frenchify!</button>
        <hr />
        Nickname:
        <input type="text" ref="nickname" onChange={this.handleChange} />
        <hr />
        <UserList users={["Person1", "Person2"]}/>
      </div>
    );
  }
}
