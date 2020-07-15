import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3 mb-4 bg-white rounded'>
      <Link
        className='navbar-brand mb-0 h1'
        style={{ color: '#4c0080' }}
        to='/'
      >
        <i className={icon} /> {title}
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Dashboard <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/projects'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/settings'>
              Settings
            </Link>
          </li>
        </ul>
        <ul className='nav navbar-nav ml-auto'>
          <i className='far fa-user-circle' />
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'TinyTime',
  icon: 'fas fa-stopwatch',
};

export default Navbar;
