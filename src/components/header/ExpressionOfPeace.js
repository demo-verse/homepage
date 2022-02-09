import React from 'react';
import { tw } from 'twind';

export default function ExpressionOfPeace() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className={tw(
          `bg-red-600 text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`,
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
                  `border-0 rounded-lg shadow-lg relative  flex-col w-full bg-white outline-none focus:outline-none`,
                )}
              >
                {/*header*/}

                <div
                  className={tw(
                    `justify-center items-center flex overflow-y-auto text-2xl  inset-0 z-50 outline-none focus:outline-none`,
                  )}
                >
                  Expression of Peace
                </div>

                {/*body*/}
                <div className={tw(`relative p-6 flex-auto text-center`)}>
                  <p className={tw(`my-4 text-blueGray-500 mb-6flex overflow-y-auto `)}>Hello, world!</p>

                  <p className={tw(`my-4 text-blueGray-500 mb-6 leading-relaxed`)}>
                    Hereby, I am signing this petition to be effective and intentional for the world peace, as a
                    resident of this planet.
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
                    I'd like this petition as statement as exemption on tax for defence. I don't need that defence. That
                    is relatively an offence for any other people in the world, as well as for me, if I would have to
                    change things in a protest/demonstration.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I am sharing what they are suffering and enjoying life more, when they achieve what's good for us,
                    our civilisation.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    Residents or states in other countries are not my enemies. In the age I was born, people were
                    leaving for power, and gaining and sustaining that with fear and domination.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I am feeling responsible for remotes, as well as locals, and all livings, as well as human beings.
                    they might be governed by autocrats, even dictators and in any form of oppression and unwarranted
                    treatment.
                  </p>
                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    I respect each individual's peaceful opinions and values, from any time and location and would like
                    to be among billions, that says yes to peace.
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
                    If violence, sustaining conflicts and fears are still the main instrument of power, then I need to
                    declare world peace with billions.
                  </p>

                  <p className="my-4 text-blueGray-500 mb-6 leading-relaxed">
                    So be it. I would rather live and let live, peacefully.
                  </p>
                </div>
                {/*footer*/}
                <div
                  className={tw(
                    `flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b`,
                  )}
                >
                  <button
                    className={tw(
                      `text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`,
                    )}
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    wow!
                  </button>
                  {/* <button
                      className={tw(`bg-emerald-500 text-black active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`)} 
                      type="button"
                      onClick={() => {
                        console.log(`gonna redirect to dapp from here`);
                        setShowModal(false)}}
                    >
                      Sign
                    </button> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className={tw(`opacity-25 fixed inset-0 z-40 bg-black`)}></div> */}
        </>
      ) : null}
    </>
  );
}
