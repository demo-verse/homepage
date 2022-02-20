import React from 'react';
import { tw } from 'twind';
import ExpressionOfPeaceV0 from './ExpressionOfPeaceV0';
import ExpressionOfDemandV0 from './ExpressionOfDemandV0';

export default function ExpressionOfPeace() {
  const [showModal, setShowModal] = React.useState(true);
  const [version, setVersion] = React.useState(0);
  return (
    <>
      <button
        className={tw(
          `bg-blue-500 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`,
        )}
        type="button"
        onClick={() => (showModal ? setShowModal(false) : setShowModal(true))}
      >
        Expression of Peace # {version}
      </button>
      <span className={tw(`text-white text-4xl`)}>+</span>
      <button
        className={tw(
          `bg-red-600 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`,
        )}
        type="button"
        onClick={() => (showModal ? setShowModal(false) : setShowModal(true))}
      >
        Expression of Demand # {version}
      </button>
      {showModal ? <ExpressionOfPeaceV0 /> : <ExpressionOfDemandV0 />})
    </>
  );
}
