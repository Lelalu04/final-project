import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Info from './Pages/Info';

import Header from './Components/Header/Header';
import Country from './Pages/Country';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <>
    <Header className=""/>
    <div className='max-w-screen-xl px-8 mx-auto w-full'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Country/Info' element={<Info/>}/>
      <Route path='/Country' element={<Country/>}/>
      <Route path='/SearchPage' element={<SearchPage/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
