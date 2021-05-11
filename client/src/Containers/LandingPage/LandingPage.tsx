import React, { useState } from 'react';
import { Button } from '../../Components/Button/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import './LandingPage.scss';

interface Props {
  landingPageRef: React.RefObject<HTMLDivElement>;
  displayMenu: boolean;
  dark: boolean;
}

interface Component {
  display: boolean;
}

interface Dark {
  dark: boolean;
}

const MainHeader = styled.header<Component>`
  height: ${(props) => (props.display ? '34rem' : '13.5rem')};
  transition: all 250ms;
  @media (max-width: 34.5em) {
    height: ${(props) => (props.display ? '30rem' : '12rem')};
  }
  @media (max-width: 21.25em) {
    height: ${(props) => (props.display ? '28rem' : '8rem')};
  }
`;

export const LandingPage: React.FC<Props> = ({
  landingPageRef,
  displayMenu,
  dark,
}): JSX.Element => {
  const [display, setDisplay] = useState(false);

  const checkMenu = (clN: string, oldClN: string, darkClN: string) => {
    if (displayMenu) {
      if (dark) {
        return darkClN;
      } else {
        return clN;
      }
    }
    return oldClN;
  };

  const menuList = (
    <li
      className='LandingPage__item nav'
      onClick={() => {
        setDisplay(!display);
      }}
    >
      <p
        style={{
          cursor: 'pointer',
        }}
        className='LandingPage__link'
      >
        Menu
      </p>
    </li>
  );

  const navList = (
    <>
      <CSSTransition
        id={1}
        in={!displayMenu || display}
        timeout={10}
        classNames='navItem'
      >
        <li className='LandingPage__item'>
          <a href='/' className='LandingPage__link'>
            Home
          </a>
        </li>
      </CSSTransition>
      <CSSTransition
        id={2}
        in={!displayMenu || display}
        timeout={10}
        classNames='nav1'
      >
        <li className='LandingPage__item'>
          <a href='/work' className='LandingPage__link'>
            Our Work
          </a>
        </li>
      </CSSTransition>
      <CSSTransition
        id={3}
        in={!displayMenu || display}
        timeout={10}
        classNames='nav2'
      >
        <li className='LandingPage__item'>
          <a href='/blog' className='LandingPage__link'>
            Blogs
          </a>
        </li>
      </CSSTransition>
      <CSSTransition
        id={4}
        in={!displayMenu || display}
        timeout={10}
        classNames='nav3'
      >
        <li className='LandingPage__item'>
          <a href='#contact' className='LandingPage__link'>
            Contact
          </a>
        </li>
      </CSSTransition>
    </>
  );

  return (
    <div className='LandingPage' ref={landingPageRef}>
      <MainHeader
        display={display}
        className={checkMenu(
          'LandingPage__header LandingPage__menu',
          'LandingPage__header',
          'LandingPage__header LandingPage__menu--dark'
        )}
      >
        <div className='LandingPage__logo-container'>
          <h1 className='LandingPage__logo'>FidelX</h1>
        </div>
        <nav className='LandingPage__nav-bar'>
          <TransitionGroup>
            <ul className='LandingPage__list'>
              <CSSTransition
                id={0}
                in={displayMenu}
                timeout={250}
                classNames='nav'
              >
                {menuList}
              </CSSTransition>
              {navList}
            </ul>
          </TransitionGroup>
        </nav>
      </MainHeader>
      <section className='LandingPage__info-section'>
        <div className='LandingPage__showcase'>
          <h1>
            We Craft Digital
            <br />
            Experiences
          </h1>
          <hr />
        </div>
        <div className='LandingPage__info'>
          <h2>
            Crafting digital experiences
            <br />
            that help people
          </h2>
          <p>
            We are a group of web developers focused on helping companies grow
            their businesses through websites optimized for conversion with
            visual hierarchy.
          </p>
          <Button text='Read More' size='small' />
        </div>
      </section>
      <hr className='LandingPage__vertical-line' />
    </div>
  );
};
