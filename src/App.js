import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar'
import HomeValue from './component/HomeValue';
function App() {
  return (
    <div className="container  h-screen mx-auto ">
  <Header></Header>
 <div className='flex max-w-1024  mx-auto'>
  <Sidebar></Sidebar>
  <HomeValue></HomeValue>
 </div>
  
  
  </div>
  );
}

export default App;
