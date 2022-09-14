import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs

} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA1livyVlvzxciTMCotiABiiO-FQadnnwU",
    authDomain: "crown-clothing-db-3a3c8.firebaseapp.com",
    projectId: "crown-clothing-db-3a3c8",
    storageBucket: "crown-clothing-db-3a3c8.appspot.com",
    messagingSenderId: "727429535272",
    appId: "1:727429535272:web:05114bb6fcdc83ae8d071d"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider)
export const signInWithYourEmailAndPassword = async (email,password) =>{
    if(!email || !password) return;
    return await  signInWithEmailAndPassword(auth, email, password)
} 

export const signOutUser = async () => {
    await signOut(auth)
}

export const db = getFirestore();

export const addColletctionAndDocument = async (collectionKey, objecrsToAdd) =>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);

    objecrsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit();

}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories')
    const q =query(collectionRef);
    const querySnapshop = await getDocs(q)
    const categoryMap = querySnapshop.docs.reduce((acc,docSnapshot)=> {
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})
    return categoryMap
    
}

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShop = await getDoc(userDocRef)

    if (!userSnapShop.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthChangedListener = (callback) => 

   onAuthStateChanged(auth, callback)