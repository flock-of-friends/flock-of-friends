// import sass styling
import './sass/App.scss';
// utilities
import { Link, Routes, Route } from 'react-router-dom'
// components
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import BoredForm from './components/Forms/BoredForm';
import LandingPage from './components/LandingPage'
import BoredComponent from './components/BoredComponent';
import BoredInvite from './components/Forms/BoredInvite';



function App() {


  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        {/* TicketMaster component will replace the below component, this was just for testing routing. */}
        <Route path='/testComponent' element={<TestComponent/>}/>
        <Route path='/boredComponent' element={<BoredComponent/>}/>
        <Route path='/boredForm' element={<BoredForm />}/>
        <Route path='/boredinvite/:invites' element={<BoredInvite />}/>
      </Routes>
      {/* <BoredForm /> */}
    </div>
  );
}

export default App;
 {/* <TestComponent /> */}
      