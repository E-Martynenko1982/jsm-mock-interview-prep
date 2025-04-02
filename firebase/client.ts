import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBW6zyb30e7MfLFI5XN8HDN2QOixT2075Q',
  authDomain: 'prepwise-24093.firebaseapp.com',
  projectId: 'prepwise-24093',
  storageBucket: 'prepwise-24093.firebasestorage.app',
  messagingSenderId: '471070523580',
  appId: '1:471070523580:web:5b6ab7278893c2f23150b9',
  measurementId: 'G-HPNJ9C0NG5',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
