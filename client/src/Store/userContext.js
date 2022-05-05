import { createContext, useState } from 'react';
import { StoreUser, GetUser, RemoveUser } from '../Store/localStorage';

const userContext = createContext({
  user: GetUser(),
  updateUser: (user) => { },
  isLoggedIn: () => { },
  clearUser: () => { }
});

console.log(GetUser());
export function UserContextProvider(props) {

  const [user, setUser] = useState(GetUser);
  const clearUserHandler = () => {
    RemoveUser();
    setUser({});
    console.log(GetUser());

  }

  const updateUserHandler = (newUser) => {
    setUser(newUser);
    StoreUser(newUser);
  }

  const isLoggedInHandler = () => {
    return user.token ? true : false;
  }

  const context = {
    user: user,
    updateUser: updateUserHandler,
    isLoggedIn: isLoggedInHandler,
    clearUser: clearUserHandler,
  };

  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}
export default userContext;