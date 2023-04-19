import {
  ButtonsContainer,
  SignInContainer,
  SignInMessage,
} from "./SignInForm.styles.jsx";

import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

import {
  signInWithGooglePopup,
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

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

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

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <SignInMessage>
        Sign In with your credentials or a Google account
      </SignInMessage>
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
        <ButtonsContainer>
          <Button type="submit">Log In</Button>

          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}>
            Log In with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}
