import logo from './logo.svg';
import './App.css';
import UseReducersHook from './components/UseReducersHook';
import UseStateHooks from './components/UseStateHooks';
import UseEffectHooks from './components/UseEffectHooks';
import UseEffectHooks2 from './components/UseEffectHooks2';
import UseRefHook from './components/UseRefHook';
import UseLayoutEffectHook from './components/UseLayoutEffectHook';
import UseImperativeHandle from './components/UseImperativeHandle';
//react routing

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './ReactRouting/Home';
import About from './ReactRouting/About';
import Contact from './ReactRouting/Contact';
function App() {
  return (

    <>
{/* <UseStateHooks/> */}
    {/* <UseReducersHook/> */}
    {/* <UseEffectHooks/> */}
    {/* <UseEffectHooks2/> */}
    {/* <UseRefHook/> */}
 {/* <UseLayoutEffectHook/> */}
{/* <UseImperativeHandle/> */}


{/* React Routing */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
    
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
