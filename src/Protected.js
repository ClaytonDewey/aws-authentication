import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import protectedRoute from './protectedRoute';

const Protected = (props) => {
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      props.history.push('/profile');
    });
  }, [props.history]);
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
};

export default protectedRoute(Protected);
