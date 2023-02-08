import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      {/* <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button> */}

      <SignUpForm />
    </>
  );
}

export default SignIn;
