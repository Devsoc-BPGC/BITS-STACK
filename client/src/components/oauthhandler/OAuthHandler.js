const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = require('./OAuthFirebaseConfig');

firebase.initializeApp(firebaseConfig);

/**
 * @brief check if the email is bits email
 * @param {string} email the email to check
 * @returns true if bits mail, false if not
 */
function checkIfBITSMail(email) {
  const address = email.split('@');
  return address[1] === 'goa.bits-pilani.ac.in';
}

/**
 * @brief signs up the user
 * @param {string} email email ID of the user
 * @param {string} password password of the user
 * @returns null if error, currentUser object if signup and login is success
 */
export const signup = async (email, password) => {
  if (!checkIfBITSMail(email)) return null;

  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(e => {
      console.log(`Error signing up: ${e.code} ${e.message}`);
    });
  return firebase.auth().currentUser;
};

/**
 * @brief logs in the user
 * @param {string} email email ID of the user
 * @param {string} password password of the user
 * @returns null if error, currentUser object if login is success
 */
export const login = async (email, password) => {
  if (!checkIfBITSMail(email)) return null;

  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(e => {
      console.log(`Error logging in: ${e.code} ${e.message}`);
    });
  return firebase.auth().currentUser;
};

/**
 * @brief logs out of the current user
 * @returns true if success, false if failure
 */
export const logout = async () => {
  let success = true;
  await firebase
    .auth()
    .signOut()
    .catch(e => {
      success = false;
      console.log(`Error logging out: ${e.code} ${e.message}`);
    });
  return success;
};
