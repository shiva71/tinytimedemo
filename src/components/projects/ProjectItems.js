import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectItems = ({ projct }) => {
  return (
    <Fragment>
      <tr style={{ cursor: 'pointer' }}>
        <td>
          <Link
            to={`/projects/:${projct.pid}`}
            className='text-decoration-none'
          >
            {projct.name}
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

ProjectItems.propTypes = {
  projct: PropTypes.object.isRequired,
};

export default ProjectItems;
