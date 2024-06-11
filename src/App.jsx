import { Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Files from './pages/Files';


import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

function App() {
  const value = {
    ripple: true,
  };

  return (
    <PrimeReactProvider value={value}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/files' element={<Files />} />
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
