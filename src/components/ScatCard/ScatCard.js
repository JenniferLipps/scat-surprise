import React from 'react';
import scatShape from '../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <p className="card-text">{scat.location}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
