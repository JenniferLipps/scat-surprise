import React from 'react';
// import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatData';

import './Home.scss';

class Home extends React.Component {
 state = {
   scats: [],
 }

 componentDidMount() {
   const { uid } = firebase.auth().currentUser;
   scatData.getScats(uid)
     .then(scats => this.setState({ scats }))
     .catch(err => console.error('no scats in Home', err));
 }

 editEvent = (e) => {
   e.preventDefault();
   const orderId = '12345';
   this.props.history.push(`/edit/${orderId}`);
 }

 render() {
   //  const singleLink = '/scat/12345';
   const showScats = this.state.scats.map(scat => (
     <h2>{scat.sampleName}</h2>
   ));

   return (
      <div className="Home">
        <h2>Home</h2>
        { showScats }
      </div>
   );
 }
}

export default Home;
