import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { Toaster, toast } from 'sonner';



function App() {
  return (
    <div className="App" >

      {/* To apply toast .. */ }


      <Toaster richColors position="top-left" />


      
      <Navbar/>

      {/* all routes are defined here..*/ }
      <AllRoutes/>

    </div>
  );
}

export default App;
