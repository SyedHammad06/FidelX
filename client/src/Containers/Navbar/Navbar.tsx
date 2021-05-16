import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

interface Props {
  displayMenu: boolean;
}

interface Component {
  display: boolean;
}

const MainHeader = styled.header<Component>`
  height: ${(props) => (props.display ? '30rem' : '13.5rem')};
  transition: all 250ms;
  @media (max-width: 34.5em) {
    height: ${(props) => (props.display ? '30rem' : '12rem')};
  }
  @media (max-width: 21.25em) {
    height: ${(props) => (props.display ? '28rem' : '8rem')};
  }
`;

export const Navbar: React.FC<Props> = ({ displayMenu }): JSX.Element => {
  const [display, setDisplay] = useState(false);

  const checkMenu = (clN: string, oldClN: string) => {
    if (displayMenu) {
      return clN;
    }
    return oldClN;
  };

  const menuList = (
    <li
      className='LandingPage__item nav2'
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
          <a href='/works' className='LandingPage__link'>
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
    <MainHeader
      display={display}
      className={checkMenu(
        'LandingPage__header LandingPage__menu',
        'LandingPage__header'
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
              classNames='nav2'
            >
              {menuList}
            </CSSTransition>
            {display ? navList : null}
          </ul>
        </TransitionGroup>
      </nav>
    </MainHeader>
  );
};
