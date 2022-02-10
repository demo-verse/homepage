import { tw, css } from 'twind/css';
import React from 'react';

const headerStyle = css`
  // background-color: #4e493f;
  background-color: #000000;
  min-height: calc(60vh - 20rem);
`;
const Header = () => {
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-2xl mx-auto py-8 px-6 lg:px-12 sm:px-6 lg:px-8 md:mt-4`)}>
        {/* <h1
          className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug text-gray-800`)}
        >
          Change the world, with one move.
        </h1> */}

        <img src="demoverse-intro.png" alt="logo" className={tw(``)} width="120%" />

        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-6 text-white text-center md:text-2xl lg:text-4xl text-xl`)}>
            A global, peer-to-peer consensus of billions, for solving planetary problems.
          </p>
          <p className={tw(`mt-6 text-white text-center md:text-2xl lg:text-4xl text-xl`)}>
            Regeneration via disarmament and world peace.
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
