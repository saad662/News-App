import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { About } from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        {/* {props= category,category,country,pageSize} */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" key="general" element={<News country="us" category="general" />} />
            <Route exact path="/sports" key="sports" element={<News country="us" category="sports" />} />
            <Route exact path="/science" key="science" element={<News country="us" category="science" />} />
            <Route exact path="/entertainment" key="entertainment" element={<News country="us" category="entertainment" />} />
            <Route exact path="/business" key="business" element={<News country="us" category="business" />} />
            <Route exact path="/technology" key="technology" element={<News country="us" category="technology" />} />
            <Route exact path="/health" key="health" element={<News country="us" category="health" />} />
            <Route exact path="/about" key="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}