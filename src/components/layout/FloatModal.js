import React, { Fragment } from 'react';

const FloatModal = () => {
  return (
    <Fragment>
      <div className='fixed-bottom position-fixed'>
        <div className='container'>
          <button
            className='btn btn-primary btn-lg rounded-pill float-right mb-3'
            data-toggle='modal'
            data-target='#getStarted'
          >
            Get Started
          </button>
        </div>
      </div>
      <div
        className='modal fade'
        id='getStarted'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='addProjectlLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addProjectlLabel'>
                Add Project
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
              <p>TEST</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FloatModal;
