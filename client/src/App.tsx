import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { About } from './Components/About/About';
import { LandingPage } from './Components/LandingPage/LandingPage';
import { TeamSection } from './Components/Team/TeamSection';
import { BlogContainer } from './Components/BlogContainer/BlogContainer';
import { Services } from './Components/Services/Services';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Blog } from './Components/Blog/Blog';
import { Works } from './Components/Works/Works';

const App: React.FC = (): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const landingPageRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({ duration: 250 });

    //* Menu Animation
    if (landingPageRef.current) {
      const landingPageEle: Element = landingPageRef.current;

      const headerOptions: { rootMargin?: string; threshold?: number } = {
        threshold: window.innerWidth > 700 ? 0.75 : 1,
      };

      const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setDisplayMenu(true);
          } else {
            setDisplayMenu(false);
          }
        });
      }, headerOptions);

      headerObserver.observe(landingPageEle);
    }
  }, [landingPageRef]);

  return (
    <Router>
      <div className='App'>
        <Route path='/blog' exact>
          <Blog />
        </Route>
        <Route path='/works' exact>
          <Works />
        </Route>
        <Route path='/' exact>
          <>
            <LandingPage
              landingPageRef={landingPageRef}
              displayMenu={displayMenu}
            />
            <About />
            <TeamSection />
            <BlogContainer blog={blogRef} />
            <Services />
            <Contact />
            <Footer />
          </>
        </Route>
      </div>
    </Router>
  );
};

export default App;
