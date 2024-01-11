import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Project from './Project';
import data from '../data.js';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer.js';
import { useState } from 'react';

const Layout = () => {
    const[showAll ,updateShowAll]=useState(false);
    return (
        <div className="overflow-x-hidden">
            <Navbar showAll={showAll} updateShowAll={updateShowAll}/>
            <Header projects={data} />
            <About />
            <Project showAll={showAll}/>
            <Skill />
            <Contact />
            <Footer />
        </div>
    );
}

export default Layout;