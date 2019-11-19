import React, { Component } from 'react';

import './style.scss';

/*
import mode from '../../assets/';
import like from '../../assets/';
import comment from '../../assets/';
import send from '../../assets/';
*/

class Feed extends Component {
  render() {
    return (
      <sectionpost-list>
        <article>
          <header>
            <div className="user-info">
              <span>Wilson Neto</span>
              <span className="place">Rio do Sul</span>
            </div>
          </header>
        </article>
      </sectionpost-list>
    );
  }
}

export default Feed;
