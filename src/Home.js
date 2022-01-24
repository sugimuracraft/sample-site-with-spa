import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>First Section</h1>

        <p>
          This is first section's description.<br/>
          This is first section's description. This is first section's description. This is first section's description. This is first section's description. This is first section's description. This is first section's description.<br/>
          This is first section's description. This is first section's description. This is first section's description.
        </p>

        <div className="row">
          <div className="col-sm">
            <p>
              <Link to="/contents/1-1">Page 1-1</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
          <div className="col-sm">
            <p>
            <Link to="/contents/1-2">Page 1-2</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
          <div className="col-sm">
            <p>
            <Link to="/contents/1-3">Page 1-3</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
        </div>

        <h1>Second Section</h1>

        <p>
          This is first section's description.<br/>
          This is first section's description. This is first section's description. This is first section's description. This is first section's description. This is first section's description. This is first section's description.<br/>
          This is first section's description. This is first section's description. This is first section's description.
        </p>

        <div className="row">
          <div className="col-sm">
            <p>
              <Link to="/contents/2-1">Page 2-1</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
          <div className="col-sm">
            <p>
              <Link to="/contents/2-2">Page 2-2</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
          <div className="col-sm">
            <p>
            <Link to="/contents/2-3">Page 2-3</Link><br/>
              One of three columns.One of three columns.One of three columns.One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.<br/>
              One of three columns.One of three columns.One of three columns.One of three columns.
            </p>
          </div>
        </div>

        <div>
          <Link to="/contents/about">About</Link>
        </div>
      </div>
    );
  }
}

export default Home;
