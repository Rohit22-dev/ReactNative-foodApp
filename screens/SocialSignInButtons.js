import React from 'react'
import CustomButton from './CustomButton'

const SocialSignInButtons = () => {
    
    const onForgotPwdPressed = () => {
      console.warn('Forgot Password');
    };
    const onSignInGoogle = () => {
      console.warn('Sign In with Google');
    };
    const onSignInFacebook = () => {
      console.warn('Sign In with Facebook');
    };
  return (
    <>
      <CustomButton
          text="Forgot Password"
          onPress={onForgotPwdPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e3e3e3"
          fgColor="#4765a9"
        />
    </>
  )
}

export default SocialSignInButtons