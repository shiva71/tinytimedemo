import React from 'react';
import RegisterProjectTime from './RegisterProjectTime';
import ProjectDetails from './ProjectDetails';

export const GetCurrentProject = ({ match }) => {
  const id = match.params.id;
  return (
    <div className='container-fluid'>
      <RegisterProjectTime />
      <ProjectDetails />
    </div>
  );
};

export default GetCurrentProject;
