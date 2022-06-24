import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjpwqgw0gUlbfhv2kPW2Bl-kzNfqrs18Q",
    authDomain: "rn-uber-eat-clone-6bd0d.firebaseapp.com",
    projectId: "rn-uber-eat-clone-6bd0d",
    storageBucket: "rn-uber-eat-clone-6bd0d.appspot.com",
    messagingSenderId: "871937840528",
    appId: "1:871937840528:web:16b98fa265f3137d2d0f15"
  };

  
//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;