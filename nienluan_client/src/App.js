import Nav from './components/Nav';
import Trangchu from './components/Home';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Study from './components/Study';
import StudyDetail from './components/StudyDetail';
import { Component, useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import BlogDetail from './components/BlogDetail';
function App() {

  const [show, setShow] = useState(true);


  return (
    <div className="App">
      {show && <Nav />}
      <Routes>
        <Route path="/" element={<Trangchu setShow={setShow} />} />
        <Route path="/Blog" element={<Blog setShow={setShow} />} />
        <Route path="/Study" element={<Study setShow={setShow} />} />
        <Route path="/Study/:id" element={<StudyDetail setShow={setShow} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Blog/:id" element={<BlogDetail setShow={setShow} />} />
      </Routes>
      {show && <Footer />}
    </div>
  );
}

export default App;
