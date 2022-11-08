// Styleing
import './App.scss';
// components
import Header from './components/Header';
import TestComponent from './components/TestComponent';
import BoredForm from './components/Forms/BoredForm';
// configs
import firebaseConfig from './firebase';
import { Link, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <Header />
      {/* <TestComponent /> */}
      <BoredForm />
    </div>
  );
}

export default App;
