import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Routing from './Routing';
import DeveloperWarning from './components/DeveloperWarning';

function App() {
  return (
    <>
      <Routing />
      <DeveloperWarning />
      <ToastContainer position='top-center'/>
    </>
  );
}

export default App;
