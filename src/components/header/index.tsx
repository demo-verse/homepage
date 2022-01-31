import { tw, css } from 'twind/css';
import React from 'react';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(60vh - 20rem);
`;
const Header = () => {
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-2xl mx-auto py-8 px-14 sm:px-6 lg:px-8 md:mt-10`)}>
        <h1
          className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug text-gray-800`)}
        >
          Change the world, with one move.
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-500 text-center text-2xl lg:text-4xl`)}>
            A global, peer-to-peer consensus of billions, for solving planetary problems.
          </p>
        </div>
      </div>
      <div className={tw(`sm:mt-8 mt-12 lg:mt-16 flex justify-center items-center w-full mx-auto`)}>
        {/* <ExpressonOfPeace /> */}
      </div>
    </header>
  );
};

export default Header;
