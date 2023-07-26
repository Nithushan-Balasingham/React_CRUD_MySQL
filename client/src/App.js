import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Books from './Books';
import CreateNew from './CreateNew';
import Update from './Update';
import {Login} from './Login';
import Signup from './Signup';
import Users from './Users';
import UpdateUser from './UpdateUser';
import Rolle from './Rolle';
// import Container from './Container';
function App() {
  return (
    <div className="App">
      {/* <Container/> */}
     <BrowserRouter>
      <Routes>
        <Route path='/'  element ={<Login/>}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='add' element={<CreateNew/>}/>
        <Route path='/role' element= {<Rolle/>}/>
        <Route path='/update/:id' element ={<Update/>}/>
        <Route path ='/users' element={<Users/>}/>
        <Route path ='/users/update/:id' element={<UpdateUser/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
