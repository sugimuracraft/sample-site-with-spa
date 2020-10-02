import React from 'react';
import { Link } from 'react-router-dom';

class Page1In1 extends React.Component {
  render() {
    return (
      <div className="Page1In1">
        <nav><Link to="/">top</Link> &gt; 1-1</nav>

        <h1>1-1 First Section</h1>

        <p>
          This is 1-1-1 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-1 Second Section</h1>

        <p>
          This is 1-1-2 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-1 Third Section</h1>

        <p>
          This is 1-1-3 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>
        
      </div>
    );
  }
}

export default Page1In1;
