
import './App.css';
import Home from './components/Home/Home.jsx'
import RighSide from './components/RightSide/RighSide.jsx';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
  
    <div className='App '>
          <div className='AppGlass '>
            <Sidebar/>
            <Home/>
            <RighSide/>
          </div>
    </div>
    
  );
}

export default App;
