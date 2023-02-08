import "./SignInForm.styles.scss";

import { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong credentials, check if you mistyped any information.");
          break;

        case "auth/user-not-found":
          alert(
            "No user associated with this e-mail, you need to create a new account."
          );
          break;

        default:
          alert(
            "Unfortunately an error as occurred while trying to authenticate, please try again later."
          );
          console.log(error);
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your credentials or a Google account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          spellcheck="false"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="" type="submit">
            Log In
          </Button>

          <Button buttonType="google" onClick={signInWithGoogle}>
            Log In with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
