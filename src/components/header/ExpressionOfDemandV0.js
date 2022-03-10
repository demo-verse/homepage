import React from 'react';
import { tw } from 'twind';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function ExpressionOfDemandV0() {
  const { speak, cancel } = useSpeechSynthesis();
  const EoDV0 = `I demand to have this consensus, from any other individual in the world, then sealed by people with official entitlements; when and if they want to be recorded in the history, as peace and solution makers.  I do not want any resources or assets being produced, traded or used for violent investments and activities on my behalf.  I'd like this statement taken as an exemption from the taxation for defence and offence; claiming preventing conflicts and wars, with more violent and binary approach. As a user of those systems on governance, I demand positively open-sourced and minded infrastructure, knowledge and mental states: better user experiences as a world resident.`;

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
              <div className={tw(`lg:mr-20 bg-green-400 lg:px-4 lg:py-2 px-2 py-2 mr-4`)}>
                <button title="listen" onClick={() => speak({ text: EoDV0 })}>
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
            <div className={tw(`relative p-6 flex-auto text-center text-xl lg:text-2xl bg-red-300 rounded-b`)}>
              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I demand to have this consensus, from any other individual in the world, then sealed by people with
                official entitlements; when and if they want to be recorded in the history, as peace and solution
                makers.
              </p>

              <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                I do not want any resources or assets being produced, traded or used for violent investments and
                activities on my behalf.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                I'd like this statement taken as an exemption from the taxation for defence and offence; claiming
                preventing conflicts and wars, with more violent and binary approach.
              </p>

              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                As a user of those systems on governance, I demand positively open-sourced and minded infrastructure,
                knowledge and mental states:
              </p>
              <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                <span className="underline">better user experiences as a world resident.</span>
              </p>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      {/* <div className={tw(`opacity-25 fixed inset-0 z-40 bg-black`)}></div> */}
    </>
  );
}
