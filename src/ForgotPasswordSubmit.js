import React from 'react';
import Button from './Button';
import { styles } from './Form';

const ForgotPasswordSubmit = ({ updateFormState, forgotPasswordSubmit }) => (
  <div style={styles.container}>
    <input
      name='confirmationCode'
      placeholder='Confirmation code'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
    />
    <input
      name='password'
      placeholder='New password'
      type='password'
      onChange={(e) => {
        e.persist();
        updateFormState(e);
      }}
      style={styles.input}
    />
    <Button onClick={forgotPasswordSubmit} title='Save new password' />
  </div>
);

export default ForgotPasswordSubmit;
