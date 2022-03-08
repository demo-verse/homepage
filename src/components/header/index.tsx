import { tw, css } from 'twind/css';
import React from 'react';

const headerStyle = css`
  // background-color: #4e493f;
  background-color: #000000;
  min-height: calc(80vh - 20rem);
`;
const Header = () => {
  return (
    <header className={tw(headerStyle)}>
      <div className={tw(`max-w-2xl mx-auto px-4 lg:px-12 sm:px-6 lg:px-8 md:mt-4`)}>
        <img src="intro.png" alt="logo" className={tw(``)} width="100%" />

        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-2 text-white text-center md:text-2xl lg:text-3xl text-xl`)}>
            Global, peer-to-peer consensus of billions, on blockchain.
          </p>
          <p className={tw(`mt-6 mb-4 lg:mb-8 text-white text-center md:text-2xl lg:text-3xl text-xl`)}>
            Progressive regeneration via disarmament and world peace vision.
          </p>

          <p className={tw(`mt-4 mb-10 lg:mb-12 text-white text-center md:text-2xl lg:text-3xl text-xl`)}>
            Express yourself!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
