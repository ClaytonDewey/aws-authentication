import React from 'react';
import Button from './Button';
import { styles } from './Form';

const SignUp = ({ updateFormState, signUp }) => (
  <div style={styles.container}>
    <input
      name='username'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
      placeholder='Username'
    />
    <input
      type='password'
      name='password'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
      placeholder='Password'
    />
    <input
      name='email'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
      placeholder='Email'
    />
    <Button onClick={signUp} title='Sign Up' />
  </div>
);

export default SignUp;
