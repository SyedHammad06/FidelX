import React from 'react';
import { Navbar } from '../../Containers/Navbar/Navbar';
import './404page.scss';

export const Page: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar displayMenu={false} />
      <div className='container'>
        <h1>
          <span>Page</span>not found
        </h1>
      </div>
    </>
  );
};
