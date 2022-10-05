import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Authentication from './routes/authentication/authentication-in.component';
import CheckOut from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Shop from './routes/shop/shop.component';
import { setCurrentUser } from './store/user/user.action';
import { createUserDocumentFromAuth, onAuthChangedListener } from './utils/firebase/firebase.utils';
import { CardElement } from '@stripe/react-stripe-js';
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    const unsubscribe = onAuthChangedListener((user)=> {
        if(user){
             createUserDocumentFromAuth(user)
             
        }
        dispatch(setCurrentUser(user))
    })
    return unsubscribe
},[])

  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={ <Home />}/>
    <Route path='/shop/*' element={ <Shop/>}/>
    <Route path='/auth' element={ <Authentication/>}/>
    <Route path='/checkout' element={ <CheckOut/>}/>
    </Route>
 
  </Routes>

  );
}

export default App;
