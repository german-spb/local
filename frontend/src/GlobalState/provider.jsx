import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Context from './state';
import { userMe, getCsrfCookie } from '../api/requests';
import Header from '../components/Header/Header';

export default function ContextProvider({children}) {
  const [sessionId, setSessionId] = useState();
  const [username, setUsername] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [currentStorageUser, setCurrentStorageUser] = useState();

  const getUserData = async () => {
    const response = await userMe();
    const data = await response.json();
    setUsername(data.username);
    setIsAdmin(data.isAdmin);
  };

  useEffect(() => {
    setSessionId(Cookies.get('sessionid'));
    getUserData();
  }, [sessionId]);

  useEffect(() => {
    const fetchData = async () => {
      await getCsrfCookie();
    };

    if (!Cookies.get('csrftoken')) {
      fetchData();
    }
  }, []);

  const memo = useMemo(() => ({
    sessionId,
    setSessionId,
    username,
    setUsername,
    isAdmin,
    currentStorageUser,
    setCurrentStorageUser,
  }));

  console.log(username)
  return (
    <Context.Provider value={memo}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};