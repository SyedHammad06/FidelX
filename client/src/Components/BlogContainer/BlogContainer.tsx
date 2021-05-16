import React from 'react';
import Pic1 from '../../assets/Images/pic1.jpg';
import Pic2 from '../../assets/Images/pic2.jpg';
import { Button } from '../Button/Button';
import './BlogContainer.scss';

interface Props {
  blog: React.RefObject<HTMLDivElement>;
}

export const BlogContainer: React.FC<Props> = ({ blog }): JSX.Element => {
  return (
    <div className='BlogContainer' ref={blog}>
      <h2 className='BlogContainer__heading' data-aos='fade-in'>
        Please do take a look at our <br />
        blogs
      </h2>
      <div className='BlogContainer__card-container'>
        <div
          className='BlogContainer__card BlogContainer__card-1'
          data-aos='fade-right'
        >
          <div className='BlogContainer__left'>
            <p className='BlogContainer__sub-heading'>
              Why do you need a website or an app?
            </p>
            <Button text='Read more' size='small' to='/blog#blog-1' />
          </div>
          <div className='BlogContainer__right'>
            <img src={Pic1} alt='not found' className='BlogContainer__img' />
          </div>
        </div>
        <div
          className='BlogContainer__card BlogContainer__card-2'
          data-aos='fade-left'
        >
          <div className='BlogContainer__left'>
            <p className='BlogContainer__sub-heading'>
              Why great design matters?
            </p>
            <Button text='Read more' size='small' to='/blog#blog-2' />
          </div>
          <div className='BlogContainer__right'>
            <img src={Pic2} alt='not found' className='BlogContainer__img' />
          </div>
        </div>
      </div>
    </div>
  );
};
