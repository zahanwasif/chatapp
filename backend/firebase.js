import config from './firebase-config';
import {apps, initializeApp, auth} from 'firebase';

class Firebase {
  constructor() {
    this.init();
    this.user();
  }

  init = () => {
    if (!apps.length) {
      initializeApp(config);
    }
  };

  user = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
      } else {
      }
    });
  };

  signInWithPhoneNumber = (phoneNumber) => {
    var code = '';
    auth().useDeviceLanguage();
    var appVerifier = new auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: function (response) {
        onSignInSubmit();
      },
    });
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
      });
  };
}
