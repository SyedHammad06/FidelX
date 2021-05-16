import React from 'react';
import Pic1 from '../../assets/Images/alan.jpeg';
import Pic2 from '../../assets/Images/saif.jpg';
import Pic3 from '../../assets/Images/hammad.jpg';
import './TeamSection.scss';
import { Button } from '../Button/Button';

interface Props {}

export const TeamSection: React.FC<Props> = (): JSX.Element => {
  return (
    <div className='Team'>
      <h2 className='Team__heading' data-aos='fade-in'>
        Meet our team !!
      </h2>
      <div className='Team__card-container'>
        <div
          className='Team__card Team__card-1'
          data-aos='zoom-in-left'
          data-aos-delay='50'
          data-aos-offset='300'
          data-aos-duration='600'
        >
          <div className='Team__card-box'>
            <img src={Pic1} alt='Not Found' className='Team__card--img' />
            <div className='Team__card--text'>
              <h3 className='Team__card--heading'>Alan Sabu Mathew</h3>
              <p className='Team__card--post'>UI / UX Designer</p>
            </div>
          </div>
          <Button text='Download resume' size='small' />
        </div>
        <div
          className='Team__card Team__card-2'
          data-aos='zoom-in'
          data-aos-delay='100'
          data-aos-offset='300'
          data-aos-duration='600'
        >
          <div className='Team__card-box'>
            <img src={Pic2} alt='Not Found' className='Team__card--img' />
            <div className='Team__card--text'>
              <h3 className='Team__card--heading'>Saif Khan</h3>
              <p className='Team__card--post'>Backend Developer</p>
            </div>
          </div>
          <Button text='Download resume' size='small' />
        </div>
        <div
          className='Team__card Team__card-3'
          data-aos='zoom-in-right'
          data-aos-delay='150'
          data-aos-offset='300'
          data-aos-duration='600'
        >
          <div className='Team__card-box'>
            <img src={Pic3} alt='Not Found' className='Team__card--img' />
            <div className='Team__card--text'>
              <h3 className='Team__card--heading'>Syed Hammad</h3>
              <p className='Team__card--post'>Frontend Developer</p>
            </div>
          </div>
          <Button text='Download resume' size='small' />
        </div>
      </div>
      <hr className='Team__vertical-line' />
    </div>
  );
};
