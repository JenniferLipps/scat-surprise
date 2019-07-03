import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <div className="EditScat">
        <h2>Edit Scat</h2>
        <h3>The editId is {editId}</h3>
      </div>
    );
  }
}

export default EditScat;
