import React, { Fragment } from 'react';
import RegisterProjectTime from '../projects/RegisterProjectTime';
import ProjectDetails from '../projects/ProjectDetails';

export const Dashboard = () => {
  return (
    <Fragment>
      <div className='container-fluid '>
        <RegisterProjectTime />
        <ProjectDetails />
      </div>
    </Fragment>
  );
};

export default Dashboard;
