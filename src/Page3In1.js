import React from 'react';
import { Link } from 'react-router-dom';

class Page3In1 extends React.Component {
  render() {
    return (
      <div className="Page3In1">
        <nav><Link to="/">top</Link> &gt; 1-3</nav>

        <h1>1-3 First Section</h1>

        <p>
          This is 1-3-1 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-3 Second Section</h1>

        <p>
          This is 1-3-2 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-3 Third Section</h1>

        <p>
          This is 1-3-3 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>
        
      </div>
    );
  }
}

export default Page3In1;
