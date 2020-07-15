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
} from './Types';

export const getProjects = (id) => (dispatch) => {
  setLoading();

  dispatch({
    type: GET_PROJECTS,
    payload: id,
  });
};

//Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
