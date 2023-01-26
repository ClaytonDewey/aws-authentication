import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Auth, Hub } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Container from './Container';
import Form from './Form';

const Profile = () => {
  useEffect(() => {
    checkUser();
    Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        setUser(null);
      }
    });
  }, []);
  const [user, setUser] = useState(null);
  const checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.error('error: ', err);
    }
  };
  const signOut = () => {
    Auth.signOut().catch((err) => console.error('error signing out: ', err));
  };
  if (user) {
    return (
      <Authenticator>
        <Container>
          <h1>Profile</h1>
          <h2>Username: {user.username}</h2>
          <h3>Email: {user.email}</h3>
          <h4>Phone: {user.phone_number}</h4>
          <Button onClick={signOut}>Sign Out</Button>
        </Container>
      </Authenticator>
    );
  }
  return <Form setUser={setUser} />;
};

export default Profile;
