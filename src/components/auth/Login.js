import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  return (
    <div className='container '>
      <div className='row mt-5'>
        <div className='col border-right d-none d-sm-none d-md-block'>
          <div className='mt-5'>
            <div className='d-flex justify-content-center'>
              <div className='row'>
                <div className='col'>
                  <i className='fas fa-sign-in-alt fa-5x'></i>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <div className='row'>
                <div className='col'>
                  <p className='d-flex justify-content-center'>
                    <h4>Welcome to TinyTime!</h4>
                  </p>
                  <p className='d-flex justify-content-center'>
                    <h4> - a playground for making Userflow videos</h4>
                  </p>
                  <p
                    className='d-flex justify-content-center'
                    style={{
                      color: 'gray',
                      textAlign: 'center',
                      fontSize: '1em',
                    }}
                  >
                    TinyTime is a super simple time tracking app,<br></br> which
                    we use at Userflow to teach how to make flows.
                  </p>
                  <p style={{ color: 'gray' }}>
                    {' '}
                    It's not useful for much else - so don't use it for any real
                    time tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span></span>

        <div className='col'>
          <div className='mt-5 ml-4'>
            <form>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='inputEmail4'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='inputEmail4'
                    placeholder='Email'
                    style={{ backgroundColor: '#e6f3ff' }}
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='inputPassword4'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='inputPassword4'
                    placeholder='Password'
                    style={{ backgroundColor: '#e6f3ff' }}
                  />
                </div>
              </div>

              <button type='submit' className='btn btn-primary rounded-pill'>
                Sign in
              </button>
            </form>
            <a href='#!'>Forgot Your password</a>
            <p>
              {' '}
              Not Tiny Time Account Yet?
              <Link
                onClick={() => {
                  history.push('/register');
                }}
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
