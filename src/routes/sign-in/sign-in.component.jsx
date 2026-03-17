import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>From Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SingIn;
