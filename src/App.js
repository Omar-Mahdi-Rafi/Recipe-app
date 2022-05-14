import Pages from './pages/Pages'
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    //returns all the routes and components
    <div className="App">
      <BrowserRouter>
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
