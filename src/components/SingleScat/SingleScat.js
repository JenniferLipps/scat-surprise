import React from 'react';
import scatData from '../../helpers/data/scatData';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('could not get delete scats', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="SingleScat">
        <h2>{scat.sampleName}</h2>
        <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}

export default SingleScat;
