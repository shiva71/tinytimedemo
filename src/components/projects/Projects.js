import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../actions/projectActions';
import ProjectItems from './ProjectItems';

export const Projects = ({ projects: { project }, getProjects }) => {
  useEffect(() => {
    getProjects(1);
    // eslint-disable-next-line
  }, [getProjects]);
  return (
    <div className='container'>
      <div className='card shadow-sm p-3 mb-5 bg-white rounded border'>
        <div className='card-body'>
          <div className='row'>
            <div className='col'>
              <h5 className='card-title'>Number of Projects</h5>
            </div>
            <div className='col'>
              <button
                className='btn btn-primary rounded-pill float-right'
                data-toggle='modal'
                data-target='#addProjectModal'
              >
                New Project
              </button>
            </div>
          </div>

          <table className='table table-striped table-borderless'>
            <thead>
              <tr>
                <th>Projects</th>
              </tr>
            </thead>
            <tbody>
              {project.map((projct) => (
                <ProjectItems key={projct.pid} projct={projct} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Projects.propTypes = {
  projects: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  projects: state.projects,
});
export default connect(mapStateToProps, { getProjects })(Projects);
