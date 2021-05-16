import React from 'react';
import { Navbar } from '../../Containers/Navbar/Navbar';
import './Works.scss';

import Img1 from '../../assets/Images/unknown-1.png';
import Img2 from '../../assets/Images/unknown-2.png';
import Img3 from '../../assets/Images/unknown-3.png';
import Img4 from '../../assets/Images/unknown-4.png';
import Img5 from '../../assets/Images/unknown-6.png';
import Img6 from '../../assets/Images/unknown.png';
import { Footer } from '../Footer/Footer';

interface Props {}

export const Works: React.FC<Props> = (): JSX.Element => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className='Work'>
      <Navbar displayMenu={true} />
      <header className='Work__header'>
        <h1 className='Work__heading' data-aos='fade-in'>
          Our Works
        </h1>
      </header>
      <div className='Work__container'>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img1} alt='not found' className='Work__img' />
          <a
            href='https://pixelitcreatives.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://pixelitcreatives.netlify.app
          </a>
        </div>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img2} alt='not found' className='Work__img' />
          <a
            href='https://kaustubha-website.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://kaustubha-website.netlify.app
          </a>
        </div>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img3} alt='not found' className='Work__img' />
          <a
            href='https://star-movie-reference.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://star-movie-reference.netlify.app
          </a>
        </div>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img4} alt='not found' className='Work__img' />
          <a
            href='https://o2premiumcarcare.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://o2premiumcarcare.netlify.app
          </a>
        </div>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img5} alt='not found' className='Work__img' />
          <a
            href='https://googlebooks.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://googlebooks.netlify.app
          </a>
        </div>
        <div
          className='Work__item'
          onClick={() => setChecked(!checked)}
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <img src={Img6} alt='not found' className='Work__img' />
          <a
            href='https://star-quiz.netlify.app'
            className={
              checked ? 'Work__caption Work__display' : 'Work__caption'
            }
          >
            https://star-quiz.netlify.app
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
