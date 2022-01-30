import { tw, css } from 'twind/css';
import Button from '@/components/button';


const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(60vh - 20rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-8 px-14 sm:px-6 lg:px-8 md:mt-10`)}>
      <h1 className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug text-gray-800`)}>
        Change the world, with one move.
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-2xl lg:text-4xl`)}>
        A global, peer-to-peer consensus of billions, for solving planetary problems. 

        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>read</Button>
        <span className={tw(`mx-2 font-bold`)}>and</span>
        <Button primary>sign</Button> 

      </div>
    </div>
   
  </header>
);

export default Header;
