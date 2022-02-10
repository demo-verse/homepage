import React from 'react';
import { tw } from 'twind';

export default function ExpressionOfPeace() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className={tw(
          `bg-red-600 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`,
        )}
        type="button"
        onClick={() => (showModal ? setShowModal(false) : setShowModal(true))}
      >
        Expression of Peace #0
      </button>
      {showModal ? (
        <>
          <div
            className={tw(
              `justify-center items-center flex overflow-y-auto  inset-0 z-50 outline-none focus:outline-none`,
            )}
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
                <div className={tw(`relative p-6 flex-auto text-center text-xl lg:text-2xl bg-yellow-400 rounded-b`)}>
                  <p className={tw(`my-4 text-blueGray-500 mb-6flex overflow-y-auto `)}>Hello, world!</p>

                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    Hereby, intentionally, I am backing world peace with this petition.
                  </p>

                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    As a resident of this planet, manifesting from now, to be effective, for the future.
                  </p>

                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    Consensus is what we need to solve global problems. peace is that consensus, that needs consensus in
                    the first place.
                  </p>

                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    I do not want any resources or assets being reserved towards violent investments and activities on
                    my behalf.
                  </p>
                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    Wars and progress towards violence are not my thing. From now on, I pledge for this to the rest of
                    the world, individually assuring that sustaining conflicts, and any progress towards violence, not
                    my things.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I am feeling responsible for remotes, as well as locals, and all livings, as well as human beings.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I should not need that defence in the first place. That is relatively an offence for any other
                    people in the world. As well as for me, if I would have to change things @ a demonstration.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I am suffering when other livings are suffering. And enjoying life more, when we achieve what's good
                    for all, our civilisation.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    Residents or states in other countries are not my enemies. In the age I was born, people were living
                    for power and sustaining that with domination and fear.
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
                    I demand to have this consensus, from any other individual in the world, then sealed by people with
                    official entitlements; when and if they want to be recorded in the history, as peace and solution
                    makers.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    No country is greater or more important than our civilisation, nor our civilisation, greater than
                    our planet.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I'd like this statement taken as an exemption of taxation for defence; which as-is, claims
                    preventing conflicts and wars, with more violent resources.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    If violence, sustaining conflicts and fears will be the main instrument of power, then I need to
                    declare world peace with 7+ billions.
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
      ) : null}
    </>
  );
}
