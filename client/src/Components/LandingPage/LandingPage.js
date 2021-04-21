import { ArrowRightAltRounded } from '@material-ui/icons';
import Button from '../UI/Button/Button';
import './LandingPage.scss';

const landingPage = (props) => {
  return (
    <div className='LandingPage'>
      <header className='LandingPage__header'>
        <div className='LandingPage__logo-container'>
          <h2 className='LandingPage__logo'>FidelX</h2>
        </div>
        <nav className='LandingPage__nav'>
          <ul className='LandingPage__list'>
            <li className='LandingPage__item'>
              <a href='#Home' className='LandingPage__links'>
                Home
              </a>
            </li>
            <li className='LandingPage__item'>
              <a href='#Projects' className='LandingPage__links'>
                Projects
              </a>
            </li>
            <li className='LandingPage__item'>
              <a href='#Articles' className='LandingPage__links'>
                Articles
              </a>
            </li>
            <li className='LandingPage__item'>
              <a href='#Contact' className='LandingPage__links'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className='LandingPage__showcase'>
        <h1 className='LandingPage__heading'>
          Don't Just
          <br />
          Build a brand,
          <br />
          <span>design a Legacy.</span>
        </h1>
        <p className='LandingPage__info'>
          We're a full-service design agency focused on crafting bespoke
          websites, branding and marketing campaigns for success-driven
          organisations that want to be seen and heard.
        </p>
        <Button to='#Contact'>
          <span>Send Us a Message</span>
          <ArrowRightAltRounded fontSize='large' />
        </Button>
      </div>
      <div className='LandingPage__curve'>
        <svg
          viewBox='0 0 1438 153'
          fill='#fff'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 145.5V91.2436C0 91.2436 59 98.2238 311.5 91.2436C564 84.2635 859.5 0.999956 1046 1H1437V145.5H0Z' />
        </svg>
      </div>
    </div>
  );
};

export default landingPage;
