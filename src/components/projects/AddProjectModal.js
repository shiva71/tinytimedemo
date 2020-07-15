import React from 'react';

const AddProjectModal = () => {
  return (
    <div
      className='modal fade'
      id='addProjectModal'
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
            <form>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='addProject'>Enter New Project Name</label>
                  <input
                    type='text'
                    className='form-control'
                    name='jobDone'
                    placeholder='Project Name'
                    id='addProject'
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-outline-primary rounded-pill'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' className='btn btn-primary rounded-pill'>
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
