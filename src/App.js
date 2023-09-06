import React from 'react';

import {Header} from './components/header.js';
import {Hero} from './components/hero.js'
import {AboutMe} from "./components/about_me.js";
import {Skills} from "./components/skills.js";
import {Projects} from "./components/projects.js";
import {Contact} from "./components/contact.js";
import {Footer} from "./components/footer.js";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
