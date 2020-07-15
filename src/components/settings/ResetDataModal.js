import React from 'react';

const ResetDataModal = () => {
  return (
    <div
      className='modal fade'
      id='resetDataModal'
      tabIndex='-1'
      role='dialog'
      aria-labelledby='resetDatalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='resetDataLabel'>
              Reset Data
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col'>
                <p>Do you want to delete all your TinyTime data?</p>
                <strong>This action cannot be undone</strong>
              </div>
            </div>
            <form>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-outline-danger rounded-pill'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
                <button type='button' className='btn btn-danger rounded-pill'>
                  Reset All Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetDataModal;
