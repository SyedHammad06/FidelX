import React from 'react';
import './About.scss';

interface Props {}

export const About: React.FC<Props> = (): JSX.Element => {
  return (
    <div className='About'>
      <h2 data-aos='fade-in' className='About__heading'>
        Why work with us ?
      </h2>
      <div className='About__top-section'>
        <p data-aos='fade-right' className='About__para-1'>
          We are a young and creative agency skilled in design and development.
          We are different, because we are like you. That is why{' '}
          <del>we don't follow any customer</del>, but only whose who have
          already chosen not to be like everybody else.
        </p>
        <p data-aos='fade-left' className='About__para-2'>
          We strategize, communicate, design and develop human centered products
          and services that connect brands to their customers.
        </p>
      </div>
      <hr className='About__horizontal-line' />
      <div className='About__bottom-section'>
        <div
          className='About__card-1'
          data-aos='fade-right'
          data-aos-offset='100'
        >
          <h3 className='About__sub-heading'>design.</h3>
          <p className='About__info'>
            There is no idea we cannot make digital. We design and build and
            manage all-in-one solutions with a technical mind and a creative
            heart.
          </p>
        </div>
        <div
          className='About__card-2'
          data-aos='fade-left'
          data-aos-offset='100'
        >
          <h3 className='About__sub-heading'>development.</h3>
          <p className='About__info'>
            If something is useful, but it is not beautiful and usable. We don't
            take it. We think about the best outfit to introduce you to your
            customers, that is your brand or the right interface to connect with
            you.
          </p>
        </div>
        <div
          className='About__card-3'
          data-aos='fade-right'
          data-aos-offset='100'
        >
          <h3 className='About__sub-heading'>marketing.</h3>
          <p className='About__info'>
            We know how to get to the people who are already looking for you. If
            there is a target for your idea. We can reach it. We will define
            together goals, strategy and the budget to get to where you've
            dreamed.
          </p>
        </div>
      </div>
      <hr className='About__vertical-line' />
    </div>
  );
};
