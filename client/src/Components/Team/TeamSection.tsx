import React from 'react';
import Pic1 from '../../assets/Images/alan.jpeg';
import Pic2 from '../../assets/Images/saif.jpg';
import Pic3 from '../../assets/Images/hammad.jpg';
import './TeamSection.scss';
import { Button } from '../Button/Button';

interface Props {
  teamRef: React.RefObject<HTMLDivElement>;
}

export const TeamSection: React.FC<Props> = ({ teamRef }): JSX.Element => {
  return (
    <div className='Team' ref={teamRef}>
      <h2 className='Team__heading'>Meet our team !!</h2>
      <div className='Team__card-container'>
        <div className='Team__card Team__card-1'>
          <div className='Team__card-box'>
            <img src={Pic1} alt='Not Found' className='Team__card--img' />
            <div className='Team__card--text'>
              <h3 className='Team__card--heading'>Alan Sabu Mathew</h3>
              <p className='Team__card--post'>UI / UX Designer</p>
            </div>
          </div>
          <Button text='Download resume' size='small' />
        </div>
        <div className='Team__card Team__card-2'>
          <div className='Team__card-box'>
            <img src={Pic2} alt='Not Found' className='Team__card--img' />
            <div className='Team__card--text'>
              <h3 className='Team__card--heading'>Saif Khan</h3>
              <p className='Team__card--post'>Backend Developer</p>
            </div>
          </div>
          <Button text='Download resume' size='small' />
        </div>
        <div className='Team__card Team__card-3'>
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
    </div>
  );
};
