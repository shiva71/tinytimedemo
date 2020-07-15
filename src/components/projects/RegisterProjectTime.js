import React from 'react';

const RegisterProjectTime = () => {
  return (
    <div className='card shadow-sm  mb-5 bg-white rounded border'>
      <div className='card-body'>
        <form>
          <div className='row'>
            <div className='col-md-3 col-sm-6 mb-2'>
              <input
                type='text'
                className='form-control'
                name='jobDone'
                placeholder='What have you done'
              />
            </div>

            <div className='col-md-2 col-sm-6 mb-2 '>
              <select className='form-control '>
                <option>Select Project</option>
                <option>Project 2</option>
              </select>
            </div>
            <div className='col-md-2 col-sm-6 mb-2'>
              <input
                type='text'
                className='form-control'
                name='date'
                placeholder='Date'
              />
            </div>
            <div className='col-md-1 col-sm-6 mb-2'>
              <input
                type='text'
                className='form-control'
                name='timeStart'
                placeholder='Time'
              />
            </div>
            <span className='pt-1 d-none d-sm-block'>
              <i className='fas fa-long-arrow-alt-right ' />
            </span>

            <div className='col-md-1 col-sm-6 mb-2'>
              <input
                type='text'
                className='form-control'
                name='timeEnd'
                placeholder='Time'
              />
            </div>
            <div className='col-md-2 col-sm-6 mb-2 pr-md-0'>
              <button className='btn rounded-pill  btn-primary form-control'>
                Register Time
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterProjectTime;
