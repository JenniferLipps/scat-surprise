import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  locationChange = e => this.formFieldStringState('location', e);

  weightChange = e => this.formFieldStringState('weight', e);

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  animalChange = e => this.formFieldStringState('animal', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = firebase.auth().currentUser.uid;
    scatData.postScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <h1>New Scat</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleName">Location</label>
              <input
              type="text"
              className="form-control"
              id="location"
              placeholder="place"
              value={newScat.location}
              onChange={this.locationChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="sampleName">Weight</label>
              <input
              type="text"
              className="form-control"
              id="weight"
              placeholder="12g"
              value={newScat.weight}
              onChange={this.weightChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="sampleName">Sample</label>
              <input
              type="text"
              className="form-control"
              id="sampleName"
              placeholder="Sample 12"
              value={newScat.sampleName}
              onChange={this.sampleNameChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
              <input
              type="text"
              className="form-control"
              id="color"
              placeholder="brown"
              value={newScat.color}
              onChange={this.colorChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="color">Animal</label>
              <input
              type="text"
              className="form-control"
              id="animal"
              placeholder="fox"
              value={newScat.animal}
              onChange={this.animalChange}
              />
          </div>
          <button type="submit" className="btn btn-primary">Save Scat!</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
