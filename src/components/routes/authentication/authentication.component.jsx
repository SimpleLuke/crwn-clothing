// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect,} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     fetchUserData();
  //   }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
