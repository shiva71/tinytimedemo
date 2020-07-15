import React from 'react';

const ResetData = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <strong>Reset</strong>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            You can reset your TinyTime account by deleting all projects and
            time entries.
          </p>

          <button
            className='btn btn-danger rounded-pill'
            data-toggle='modal'
            data-target='#resetDataModal'
          >
            Reset Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetData;
