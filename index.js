// setting firebase with our website

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyD_wHZKpclYjyxCFvgmX8rNNzXYl_wYjPE",
    authDomain: "ushop-project.firebaseapp.com",
    projectId: "ushop-project",
    storageBucket: "ushop-project.firebasestorage.app",
    messagingSenderId: "1013824428908",
    appId: "1:1013824428908:web:3b11e51a9819eb8340b149",
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
  const email = document.getElementById("sign-email").value;
  const password = document.getElementById("sign-password").value;
  const errorContainer = document.getElementById("signup-error"); // Get the error container

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
      errorContainer.textContent = 'Signed up Successfull! Now you can Log-in!'; // Clear any previous error messages
  })
  .catch((error) => {
      var errorMessage = error.message;
      errorContainer.textContent =''+ errorMessage; 
      });
};

const login = () => {
  const loginEmail = document.getElementById("email").value;
  const loginPassword = document.getElementById("password").value;
  const errorContainer = document.getElementById("login-error"); // Get the error container

  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
  .then(() => {
      // Signed in
      window.location.href='/home.html';
      errorContainer.textContent = ''; // Clear any previous error messages
  })
  .catch((error) => {
      var errorMessage = error.message;
      errorContainer.textContent = errorMessage;
       // Show error message below password
  });
};