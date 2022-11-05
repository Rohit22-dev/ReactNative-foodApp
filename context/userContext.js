import React, {createContext} from 'react';

const UserContext = createContext({
  user: null,
  setUser: user => {},
});

export default UserContext;
