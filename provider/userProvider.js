import React, {createContext, useState} from 'react';
const userContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
