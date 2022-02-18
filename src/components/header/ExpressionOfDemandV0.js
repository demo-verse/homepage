import React from 'react';
import { tw } from 'twind';

export default function ExpressionOfDemandV0() {
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

            {/* <div
                  className={tw(
                    `justify-center items-center flex overflow-y-auto text-2xl  inset-0 z-50 outline-none focus:outline-none`,
                  )}
                >
                  Expression of Peace
                </div> */}

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
                preventing conflicts and wars, with more violent and binary approach (us/them, allies/enemies). As a
                user of those systems that are on governance, I demand more positively open-sourced and minded
                infrastructure, knowledge and mental states.
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
