import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';

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
   const showScats = this.state.scats.map(scat => (
     <ScatCard
      key={scat.id}
      scat={scat}
      />
   ));

   return (
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex">
        { showScats }
        </div>
      </div>
   );
 }
}

export default Home;
