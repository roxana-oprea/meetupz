import React, {Component} from 'react';
import axios from 'axios';

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }

  getMeetups() {
    axios.get('http://localhost:3001/meetups')
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <h1>meetups</h1>
      </div>
    )
  }
}


export default Meetups;
