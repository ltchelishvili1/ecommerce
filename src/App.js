import {Routes,Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
const App = () => {

  
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={ <Home />}/>
    <Route path='/shop' element={ <p>shop</p>}/>
    <Route path='/signIn' element={ <SignIn/>}/>
    </Route>
 
  </Routes>

  );
}

export default App;
