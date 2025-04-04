'use server';

import { db } from '@/firebase/admin';

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection('users').doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: 'User already exists',
      };
    }
  } catch (e: any) {
    console.log('Error creating a user', e);

    if (e.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'Email already exists',
      };
    }

    return {
      success: false,
      message: 'Something went wrong',
    };
  }
}
