import {Routes,Route} from 'react-router-dom'
import Authentication from './routes/authentication/authentication-in.component';
import Home from './routes/home/home.component';
import Navigation from './routes/Navigation/Navigation.component';

const App = () => {

  
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={ <Home />}/>
    <Route path='/shop' element={ <p>shop</p>}/>
    <Route path='/auth' element={ <Authentication/>}/>
    </Route>
 
  </Routes>

  );
}

export default App;
