import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Routing from './Routing';
import DeveloperWarning from './components/DeveloperWarning';
import Loading from './components/Loading';

function App() {
  return (
    <Loading>
      <Routing />
      <DeveloperWarning />
      <ToastContainer position='top-center'/>
    </Loading>
  );
}

export default App;
