import Directory from './components/directory/directory.component';
import categories from './components/data/data'
const App = () => {
  return (
   <Directory categories={categories}/>
  );
}

export default App;
