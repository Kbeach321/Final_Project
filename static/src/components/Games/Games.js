import React, {Component} from 'react';

import './Games.css';

class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <container>
      <div class="row justify-content-around">
        <div class="col-4">
          One of two columns
        </div>
        <div class="col-4">
          One of two columns
        </div>
      </div>
      </container>
      );
  }
}

export default Games;
