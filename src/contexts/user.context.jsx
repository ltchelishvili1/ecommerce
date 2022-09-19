import { useState , createContext , useEffect,useReducer} from "react";
import { createUserDocumentFromAuth, onAuthChangedListener,signOutUser } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPE = {
    'SET_CURRENT_USER': 'SET_CURRENCT_USER'
}

const userReducer = (state,action) => {
    const {type , payload} = action;

    switch(type){
        case USER_ACTION_TYPE.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: payload
        }
        default:
            throw new Error(`Unhandled type ${type} in user reducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
 //   const [currentUser,setCurrentUser] = useState(null)
  const [ {currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch(
        createAction(USER_ACTION_TYPE.SET_CURRENT_USER,user)
    )
  }  
  const value = {currentUser,setCurrentUser}
  
    useEffect(()=> {
        const unsubscribe = onAuthChangedListener((user)=> {
            if(user){
                 createUserDocumentFromAuth(user)
                 
            }
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
