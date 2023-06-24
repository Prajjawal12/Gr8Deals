import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

function OAuth() {
  const navigate = useNavigate(); // Update variable name

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for the user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google!');
    }
  }

  return (
    <div>
      <button
        type="button"
        onClickCapture={onGoogleClick}
        className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-900 active:bg-red-950 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded"
      >
        <FcGoogle className="text-xl bg-white rounded-full mr-2 " />
        Sign Up With Google
      </button>
    </div>
  );
}

export default OAuth;
