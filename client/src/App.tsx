import React, { useEffect, useRef, useState } from 'react';
import gsap, { TimelineLite } from 'gsap';
import { About } from './Components/About/About';
import { LandingPage } from './Containers/LandingPage/LandingPage';
import { TeamSection } from './Components/Team/TeamSection';
import { BlogContainer } from './Components/BlogContainer/BlogContainer';
import './App.scss';

const fadeIn = (className: string) => {
  gsap.to(className, 1, {
    opacity: 1,
  });
};

const fadeOut = (className: string) => {
  gsap.to(className, 1, {
    opacity: 0,
  });
};

const moveInFromLeft = (className: string, out?: boolean) => {
  const tl = new TimelineLite();

  tl.fromTo(
    className,
    1,
    {
      opacity: 0,
      x: '-200vw',
    },
    {
      opacity: 1,
      x: 0,
    }
  );

  if (out) {
    tl.reverse();
  }
};

const moveInFromRight = (className: string, out?: boolean) => {
  const tl = new TimelineLite();

  tl.fromTo(
    className,
    1,
    {
      opacity: 0,
      x: '200vw',
    },
    {
      delay: 0.25,
      opacity: 1,
      x: 0,
    }
  );

  if (out) {
    tl.reverse();
  }
};

const moveInFromCenter = (className: string, out?: boolean) => {
  const tl = new TimelineLite();

  tl.fromTo(
    className,
    1,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
    }
  );

  if (out) {
    tl.reverse();
  }
};

const App: React.FC = (): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const landingPageRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    //* Section Animation
    if (aboutRef.current) {
      const About: Element = aboutRef.current;

      const aboutOptions: { rootMargin?: string; threshold?: number } = {
        rootMargin: '-200px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeIn('.About__heading');
            moveInFromLeft('.About__para-1');
            moveInFromRight('.About__para-2');
          } else {
            // out animations
            fadeOut('.About__heading');
            moveInFromLeft('.About__para-1', true);
            moveInFromRight('.About__para-2', true);
          }
        });
      }, aboutOptions);

      observer.observe(About);
    }

    if (bottomRef.current) {
      const Bottom: Element = bottomRef.current;

      const aboutOptions: { rootMargin?: string; threshold?: number } = {
        rootMargin: '-100px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            moveInFromLeft('.About__card-1');
            moveInFromRight('.About__card-2');
            moveInFromLeft('.About__card-3');
          } else {
            // out animations
            moveInFromLeft('.About__card-1', true);
            moveInFromRight('.About__card-2', true);
            moveInFromLeft('.About__card-3', true);
          }
        });
      }, aboutOptions);

      observer.observe(Bottom);
    }

    if (teamRef.current) {
      const team: Element = teamRef.current;

      const teamOptions: { rootMargin: string } = {
        rootMargin: '-100px',
      };

      const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeIn('.Team__heading');
            moveInFromLeft('.Team__card-1');
            moveInFromCenter('.Team__card-2');
            moveInFromRight('.Team__card-3');
          } else {
            fadeOut('.Team__heading');
            moveInFromLeft('.Team__card-1', true);
            moveInFromCenter('.Team__card-2', true);
            moveInFromRight('.Team__card-3', true);
          }
        });
      }, teamOptions);

      teamObserver.observe(team);
    }

    if (blogRef.current) {
      const Blog: Element = blogRef.current;

      const blogOptions: { threshold?: number } = {
        threshold: 1,
      };

      const blogOptions2: { threshold?: number } = {
        threshold: 0.25,
      };

      const blogObserver1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDark(true);
          } else {
            setDark(false);
          }
        });
      }, blogOptions);

      const blogObserver2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeIn('.BlogContainer__heading');
            moveInFromLeft('.BlogContainer__card-1');
            moveInFromRight('.BlogContainer__card-2');
          } else {
            fadeOut('.BlogContainer__heading');
            moveInFromLeft('.BlogContainer__card-1', true);
            moveInFromRight('.BlogContainer__card-2', true);
          }
        });
      }, blogOptions2);

      blogObserver1.observe(Blog);
      blogObserver2.observe(Blog);
    }
  }, [landingPageRef, aboutRef, bottomRef, teamRef, blogRef]);

  return (
    <div className='App'>
      <LandingPage
        landingPageRef={landingPageRef}
        displayMenu={displayMenu}
        dark={dark}
      />
      <About aboutRef={aboutRef} bottomRef={bottomRef} />
      <TeamSection teamRef={teamRef} />
      <BlogContainer blog={blogRef} />
    </div>
  );
};

export default App;
