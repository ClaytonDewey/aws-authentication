import React from 'react';
import Button from './Button';
import { styles } from './Form';

const ForgotPassword = ({ updateFormState, forgotPassword }) => (
  <div style={styles.container}>
    <input
      name='username'
      placeholder='Username'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
    />
    <Button onClick={forgotPassword} title='Reset password' />
  </div>
);

export default ForgotPassword;
