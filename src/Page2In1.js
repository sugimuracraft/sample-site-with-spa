import React from 'react';
import { Link } from 'react-router-dom';

class Page2In1 extends React.Component {
  render() {
    return (
      <div className="Page2In1">
        <nav><Link to="/">top</Link> &gt; 1-2</nav>

        <h1>1-2 First Section</h1>

        <p>
          This is 1-2-1 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-2 Second Section</h1>

        <p>
          This is 1-2-2 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>1-2 Third Section</h1>

        <p>
          This is 1-2-3 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>
        
      </div>
    );
  }
}

export default Page2In1;
