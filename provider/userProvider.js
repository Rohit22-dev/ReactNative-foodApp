import React, {useState} from 'react';
import Context from '../context/userContext';

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider
      value={{
        user: user,
        setUser: setUser,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default UserProvider;
