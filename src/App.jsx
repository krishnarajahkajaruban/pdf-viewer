import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-in' element={<Signin />} />
    </Routes>
  );
}

export default App;
