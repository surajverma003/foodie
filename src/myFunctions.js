import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const auth = getAuth();

const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

const db = getFirestore();

const createUserDocumemtFromAuth = async (userAuth) => {
    const userDockRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDockRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    }
}


export default { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumemtFromAuth }