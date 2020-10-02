import React from 'react';
import { Link } from 'react-router-dom';

class Page2In2 extends React.Component {
  render() {
    return (
      <div className="Page2In2">
        <nav><Link to="/">top</Link> &gt; 2-2</nav>

        <h1>2-2 First Section</h1>

        <p>
          This is 2-2-1 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>2-2 Second Section</h1>

        <p>
          This is 2-2-2 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>

        <h1>2-2 Third Section</h1>

        <p>
          This is 2-2-3 description.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.<br/>
          Text text text. Text text text. Text text text. Text text text. Text text text. Text text text.
        </p>
        
      </div>
    );
  }
}

export default Page2In2;
