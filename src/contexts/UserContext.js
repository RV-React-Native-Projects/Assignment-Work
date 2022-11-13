import React, { createContext, useState } from "react";

const UserContext = createContext();

export const AuthState = {
  unknown: "unknown",
  userLoggedIn: "userLoggedIn",
  userLoggedOut: "userLoggedOut",
};

export function UserContextProvider(props) {
  const [userState, setUserState] = useState({
    user: undefined,
    authState: AuthState.unknown,
  });
  const [address, setAddress] = useState(null);
  const [currentLocation, setLocation] = useState(null);

  const setUser = (user) => {
    if (user) {
      setUserState({ user, authState: AuthState.userLoggedIn });
    } else {
      setUserState({ user: undefined, authState: AuthState.userLoggedOut });
    }
  };
  const setUserLogOut = () => {
    setUserState({ user: undefined, authState: AuthState.userLoggedOut });
  };

  const setCurrentAddress = (address) => {
    if (address) {
      setAddress(address);
    } else {
      setAddress(null);
    }
  };

  const setCurrentLocation = (address) => {
    if (address) {
      setLocation(address);
    } else {
      setLocation(null);
    }
  };

  const isUserLoggedIn = () => {
    if (userState.authState === AuthState.userLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

  const refreshUser = () => {
    setUser(userState.user);
  };

  return (
    <UserContext.Provider
      value={{
        authState: userState.authState,
        user: userState.user || null,
        setUser: setUser,
        setUserLogOut: setUserLogOut,
        isUserLoggedIn,
        currentAddress: address,
        setCurrentAddress: setCurrentAddress,
        currentLocation: currentLocation,
        setCurrentLocation: setCurrentLocation,
        refreshUser: refreshUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
