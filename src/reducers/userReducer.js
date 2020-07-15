const initialState = {
  user: [
    {
      uid: '1',
      name: 'Shiva',
      email: 'shiva@gmail.com',
      password: '12345',
    },
    {
      uid: '2',
      name: 'John',
      email: 'john@gmail.com',
      password: '12345',
    },
  ],

  loading: false,
  isAuthenticated: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
