import React from 'react';

const ProjectDetails = () => {
  return (
    <div className='card shadow-sm p-3 mb-5 bg-white rounded border'>
      <div className='card-body'>
        <h5 className='card-title'>
          Time entries across all projects - 01:00:00 in total
        </h5>
        <div className='table table-responsive'>
          <table className='table table-striped table-borderless'>
            <thead>
              <tr>
                <th scope='col'>Description</th>
                <th scope='col'>Project</th>
                <th scope='col'>Duration</th>
                <th scope='col'>Date</th>
                <th scope='col'>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>HELLO</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className='d-flex flex-row'>
                    <button className='btn btn-plain'>
                      <i className='fas fa-pen'></i>
                    </button>

                    <button className='btn btn-plain'>
                      <i className='fas fa-ellipsis-v'></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>HELLO</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className='d-flex flex-row'>
                    <button className='btn btn-plain'>
                      <i className='fas fa-pen'></i>
                    </button>

                    <button className='btn btn-plain'>
                      <i className='fas fa-ellipsis-v'></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>HELLO</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className='d-flex flex-row'>
                    <button className='btn btn-plain'>
                      <i className='fas fa-pen'></i>
                    </button>

                    <button className='btn btn-plain'>
                      <i className='fas fa-ellipsis-v'></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>HELLO</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <div className='d-flex flex-row'>
                    <button className='btn btn-plain'>
                      <i className='fas fa-pen'></i>
                    </button>

                    <button className='btn btn-plain'>
                      <i className='fas fa-ellipsis-v'></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
