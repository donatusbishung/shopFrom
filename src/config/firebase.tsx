import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBP_Y4gc8Wln10P7pe_2yP0KjAgJeM4qv0',
  authDomain: 'shopfrom-d3000.firebaseapp.com',
  projectId: 'shopfrom-d3000',
  storageBucket: 'shopfrom-d3000.firebasestorage.app',
  messagingSenderId: '1066775505060',
  appId: '1:1066775505060:web:000ee67348ed357c435e31',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
