import React from 'react';
import { Button } from '../Button/Button';
import './Contact.scss';

interface Props {}

export const Contact: React.FC<Props> = (): JSX.Element => {
  return (
    <div className='Contact' id='contact'>
      <h2 className='Contact__heading' data-aos='fade-in'>
        Interested in a free quote ? Contact Us
      </h2>
      <form
        action='https://getform.io/f/9f03d9ad-bf37-4c85-a00a-a50d91c01e8b'
        method='POST'
        className='Contact__form'
        data-aos='fade-left'
      >
        <div className='Contact__set-1'>
          <label htmlFor='name' className='Contact__label'>
            Name :-{' '}
          </label>
          <input type='text' id='name' name='name' className='Contact__input' />
        </div>
        <div className='Contact__set-2'>
          <label htmlFor='name' className='Contact__label'>
            Email Address :-{' '}
          </label>
          <input
            type='email'
            id='name'
            name='email'
            className='Contact__input'
          />
        </div>
        <div className='Contact__set-3'>
          <label htmlFor='message' className='Contact__label'>
            Message :-{' '}
          </label>
          <textarea
            name='message'
            id='message'
            className='Contact__input Contact__textarea'
          ></textarea>
        </div>
        <Button type='submit' text='Submit' size='large' />
      </form>
      <hr className='Contact__vertical-line' />
    </div>
  );
};
