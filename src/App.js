import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Routing from './Routing';

function App() {
  return (
    <>
      <Routing />
      <ToastContainer position='top-center'/>
    </>
  );
}

export default App;
