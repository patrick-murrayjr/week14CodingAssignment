import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigaton from './components/Navigation';
import MovieList from './components/MovieList';

function App() {
   return (
      <div className='bg-dark'>
         <Navigaton />
         <MovieList />
      </div>
   );
}

export default App;
