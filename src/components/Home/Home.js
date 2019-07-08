import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
 editEvent = (e) => {
   e.preventDefault();
   const orderId = '12345';
   this.props.history.push(`/edit/${orderId}`);
 }

 render() {
   const singleLink = '/scat/12345';
   return (
      <div className="Home">
        <h2>Home</h2>
        <button className="btn btn-warning" onClick={this.editEvent}>Edit</button>
        <Link to={singleLink}>View Single</Link>
      </div>
   );
 }
}

export default Home;
