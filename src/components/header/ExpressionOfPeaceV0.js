import React from 'react';
import { tw } from 'twind';
import { useSpeechSynthesis } from 'react-speech-kit';
import Favicon from 'react-favicon';

export default function ExpressionOfPeaceV0() {
  const { speak, cancel } = useSpeechSynthesis();
  const EoPV0 = `Hello, world!  Hereby, intentionally, I am backing world peace with this petition.  As a resident of this planet, manifesting from now, to be effective, for the future.  Consensus is what we need to solve global problems. Peace is that consensus, that needs consensus in the first place.  I do not want any resources or assets being produced, traded or used for violent investments and activities on my behalf.  From now on, I pledge for this to the rest of the world, individually assuring that sustaining conflicts, and any progress towards violence, wars and destruction of any kind, are not my things.  I am feeling responsible for remotes, as well as locals, and all livings, as well as human beings.  I am suffering when other livings are suffering. And enjoying life, when we achieve what's good for all, our civilisation; in harmony with rest of the nature.  Residents or states in other countries are not my enemies. In the age I was born, people were living for power and sustaining that with domination and fear.  Many of us are "governed" by autocrats, even dictators, in many forms of oppression and unwarranted treatment.  I respect each individual's peaceful opinions and values, from any time and location.  And would like to be among billions, that says yes to peace.  No country is greater or more important than our civilisation, nor our civilisation, greater than our planet.  I should not need that defence in the first place. That is relatively an offence for any other people in the world. As well as for me, if I would have to change things @ a demonstration.  As violence, sustaining conflicts and fears continues to be the main instrument of rule & power, then I need to declare world peace with 7+ billions.  So be it. I would rather live and let live, peacefully.  In the 21st century and forwards. `;

  // const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className={tw(`justify-center items-center flex overflow-y-auto  inset-0 z-50 outline-none focus:outline-none`)}
      >
        <div className={tw(`relative w-auto my-6 mx-auto max-w-3xl`)}>
          {/*content*/}
          <div
            className={tw(
              `border-0 rounded-lg shadow-lg relative  flex-col w-full bg-white outline-none focus:outline-none `,
            )}
          >
            {/*header*/}

            <div
              className={tw(
                `justify-center items-center flex overflow-y-auto text-2xl  inset-0 z-50 outline-none focus:outline-none`,
              )}
            >
              <div className={tw(`lg:mr-20 bg-green-400 lg:px-4 lg:py-2 px-4 mr-4`)}>
                <button title="listen" onClick={() => speak({ text: EoPV0 })}>
                  Listen
                </button>
              </div>
              <div className={tw(`lg:ml-20 bg-green-400 lg:px-4 lg:py-2 px-4 ml-4 `)}>
                <button title="stop" onClick={() => cancel()}>
                  Stop
                </button>
              </div>
            </div>

            {/*body*/}
            <div className={tw(`relative p-6 flex-auto text-center text-xl lg:text-2xl bg-blue-300 rounded-b`)}>
              <p className={tw(`my-4 text-blueGray-500 mb-6flex overflow-y-auto `)}>Hello, world!</p>

              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                Hereby, intentionally, I am backing world peace with this petition.
              </p>

              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                As a resident of this planet, manifesting from now, to be effective, for the future.
              </p>

              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                Consensus is what we need to solve global problems. Peace is that consensus, that needs consensus in the
                first place.
              </p>

              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                I do not want any resources or assets being produced, traded or used for violent investments and
                activities on my behalf.
              </p>
              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                From now on, I pledge for this to the rest of the world, individually assuring that sustaining
                conflicts, and any progress towards violence, wars and destruction of any kind, are not my things.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I am feeling responsible for remotes, as well as locals, and all livings, as well as human beings.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I am suffering when other livings are suffering. And enjoying life, when we achieve what's good for all,
                our civilisation; in harmony with rest of the nature.
              </p>
              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                Residents or states in other countries are not my enemies. In the age I was born, people were living for
                power and sustaining that with domination and fear.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                Many of us are "governed" by autocrats, even dictators, in many forms of oppression and unwarranted
                treatment.
              </p>
              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I respect each individual's peaceful opinions and values, from any time and location.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                And would like to be among billions, that says yes to peace.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                No country is greater or more important than our civilisation, nor our civilisation, greater than our
                planet.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I should not need that defence in the first place. That is relatively an offence for any other people in
                the world. As well as for me, if I would have to change things @ a demonstration.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                As violence, sustaining conflicts and fears continues to be the main instrument of rule {'&'} power,
                then I need to declare world peace with 7+ billions.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                So be it. I would rather live and let live, peacefully.
              </p>

              <p className="my-2 text-blueGray-500 mb-6 leading-relaxed">In the 21st century and forwards. </p>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      {/* <div className={tw(`opacity-25 fixed inset-0 z-40 bg-black`)}></div> */}
    </>
  );
}
