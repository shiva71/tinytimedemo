import {
  ADD_USER,
  GET_USER,
  DELETE_USER,
  ADD_PROJECT,
  GET_PROJECTS,
  DELETE_PROJECT,
  ADD_PROJECT_FLOW,
  UPDATE_PROJECT_FLOW,
  DELETE_PROJECT_FLOW,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  CLEAR_LOADING,
} from '../actions/Types';
const initialState = {
  project: [
    {
      pid: '1',
      pUid: '1',
      name: 'TestProject',
      workedOn: [
        {
          wid: null,
          date: null,
          startTime: null,
          endTime: null,
          time: null,
        },
      ],
      totalWorkedTime: null,
    },
    {
      pid: '2',
      pUid: '1',
      name: 'TestProject',
      workedOn: [
        {
          wid: null,
          date: null,
          startTime: null,
          endTime: null,
          time: null,
        },
      ],
      totalWorkedTime: null,
    },
  ],

  loading: false,
  currentProject: null,
  error: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        project: state.project.filter(
          (projct) => projct.pUid !== action.payload
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
