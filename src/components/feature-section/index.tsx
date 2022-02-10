import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import ExpressonOfPeace from '../header/ExpressionOfPeace';
import Quote from '@/constants/svg/quote.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6 bg-black`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h1
            className={tw(
              `font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug text-blue-500`,
            )}
          >
            Peace, <span className={tw(`text-yellow-300`)}>on blockchain</span>
          </h1>
          {/* <Quote className={tw(`w-16 md:w-10 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-500`)} /> */}

          <p className={tw(`mt-10 text-xl lg:text-2xl ftracking-tight text-white`)}>
            First time in the history, as collective expressions, acknowledgements and assurances of billions, instead
            of negotiations of hundreds.
          </p>

          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight text-white`)}>
            <span className={tw(`text-blue-400`)}>Peace is something</span> to experience and sustain{' '}
            <span className="underline">without risk of political opt-outs.</span>
          </p>

          {/* <div className={tw(`mt:12 lg:mb:8`)}>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/5r98tT0j1a0" allowFullScreen></iframe>
          </div> */}

          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight  text-white`)}>
            It is a universal and unconditional basic experience and cannot be limited within alliances.
          </p>
          <p className={tw(`mt-4 text-xl lg:text-2xl ftracking-tight  text-white mb-8 lg:mb-12`)}>
            Shall be contained within our civilisation scaled as a world peace with all on the earth, from 21st century
            forwards.
          </p>

          <div className={tw(` flex flex-wrap lg:mt-12`)}>
            <div className={tw(`w-full md:w-1/2 `)}>
              {/* come together - the beatles */}
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/45cYwDMibGo"
                allowFullScreen
              ></iframe>
            </div>
            <div className={tw(` w-full md:w-1/2 `)}>
              {/* want it back / guts ft patrice */}
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/jT6yx2kTvFQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <p className={tw(`mt-10 lg:mt-16 text-xl lg:text-2xl ftracking-tight text-white`)}>
            Here, boosting planetary regeneration with a world-wide disarmament and peace vision.
          </p>
          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight  text-white`)}>
            <span className="underline"> In fact, as world residents, looking for better user experiences.</span>
          </p>

          <p className={tw(` mb-8 mt-4 text-xl text-4xl lg:text-4xl font-bold tracking-tight  text-white`)}>
            the revolution will be minted
          </p>
          <ExpressonOfPeace />
        </div>

        <div className={tw(`flex flex-wrap my-12 text-white`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              {/* <div className={tw(`flex ml-4  text-center text-2xl`)}> 
              <Check width={20} height={20} fill="orange" className={tw(`h-14 w-14 text-indigo-500`)} />
              
              Socio-Env Contracts </div> */}

              <div className={tw(`flex items-center`)}>
                <Check width={20} height={20} fill="orange" className={tw(`h-14 w-14 text-indigo-500`)} />
                <div className={tw(`ml-4  text-center text-2xl`)}>Socio-Env Contracts</div>
              </div>
            </div>
            <p className={tw(`leading-loose text-white-200 text-xl text-center lg:text-xl`)}>
              Read a version of Expression of Peace. Currently version zero exists as EoP #0.
              {/* second: socio-environmental contracts on demoVerse */}
            </p>
            <p className={tw(`leading-loose text-white-200 text-xl text-center lg:text-xl mt-4`)}>
              Expressions are part of our Decentralised Identities, not for sale.
              {/* second: socio-environmental contracts on demoVerse */}
            </p>

            <div className={tw(`lg:mx-12 mt-4 lg:my-8 text-center font-bolder  text-black lg:text-xl text-xl`)}>
              <button
                className={tw(
                  `bg-yellow-600 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-16 w-42 rounded-full`,
                )}
              >
                <a
                  href="https://www.gsma.com/identity/decentralised-identity"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  ? DID
                </a>
              </button>
            </div>
          </div>
          {/* give possibility for conditions */}
          {/* Including demands, and hopes, denouncing wars and and speaking to people mostly, that are invited to co-imagine peace. */}

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 text-w`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="red" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4  text-center text-2xl`)}>Create a new one</div>
            </div>
            <p className={tw(`leading-loose text-white text-xl text-center lg:text-xl`)}>
              This is where our motivations can undeniably exist as legacies, forever.
            </p>

            <p className={tw(`mt-4 leading-loose text-white text-xl text-center lg:text-xl`)}>
              Connect your crypto wallet and express peace, on blockchain.
            </p>

            <div className={tw(`lg:mx-12 mt-4 lg:my-8 text-center font-bolder  text-black lg:text-xl text-xl`)}>
              <button
                className={tw(
                  `bg-purple-600 text-2xl text-white active:bg-pink-200 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-16 w-42 rounded-full`,
                )}
              >
                <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank" referrerPolicy="no-referrer">
                  ? blockchain
                </a>
              </button>
            </div>

            {/* <div className={tw(`lg:mx-12 mt-4 lg:my-8 text-center font-bolder  text-black lg:text-xl text-xl`)}>
              <button className={tw(`bg-red-600 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-16 w-42 rounded-full`)}>

            <a  href="https://gateway.pinata.cloud/ipfs/QmYBM9RpQEV6jbYM3Wf6QsZgoeeAAeKHRo1dmvhGc9xgUs" target="_blank" referrerPolicy="no-referrer">
             how to c
          </a>
              </button>
            </div> */}
          </div>

          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6 text c`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl mt-2 text-2xl lg:text-2xl lg:text-center text`)}>You've got an NFT!</div>
            </div>
            <p className={tw(` text-white text-xl text-center lg:text-xl`)}>
              Following this move towards world peace, you'll receive an EoP of your flavour.
            </p>

            <p className={tw(`lg:mt-4 leading-loose text-white text-xl text-center lg:text-xl`)}>
              A non-fungible and non-tradable token will be minted to your wallet, by yourself.{' '}
            </p>

            <div className={tw(`lg:mx-12 lg:mt-8 text-center font-bolder  text-black lg:text-xl text-xl`)}>
              <button
                className={tw(
                  ` bg-red-600 text-2xl text-white active:bg-pink-600 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-16 w-42 rounded-full`,
                )}
              >
                <a
                  href="https://gateway.pinata.cloud/ipfs/QmYBM9RpQEV6jbYM3Wf6QsZgoeeAAeKHRo1dmvhGc9xgUs"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  ? NFT
                </a>
              </button>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center  text-center mb-6`)}>
              <Check width={20} height={20} fill="purple" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-2 text-2xl lg:text-2xl`)}>Join PeaceMaker DAO</div>
            </div>
            <p className={tw(`leading-loose text-white text-xl text-center lg:text-xl`)}>
              With these NFTs existing in a wallet, anyone can join the PeaceMaker DAO, a decentralized autonomous
              organisation of all. Let's write future, from now!
            </p>
            <div className={tw(`lg:mx-12 mt-4 lg:my-8 text-center font-bolder  text-black lg:text-xl text-xl`)}>
              <button
                className={tw(
                  `bg-white text-2xl text-black active:bg-pink-200 hover:bg-black hover:text-yellow-400 font-bold lg:text-lg md:text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-16 w-42 rounded-full`,
                )}
              >
                <a href="https://ethereum.org/en/dao/" target="_blank" referrerPolicy="no-referrer">
                  ? DAO
                </a>
              </button>
            </div>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(` text-center flex items-center mb-6`)}>
              <Check width={20} height={20} fill={tw(`${'#00acee'}`)} className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-2xl lg:text-2xl`)}> Have some $PEACE</div>
            </div>
            <p className={tw(`leading-loose text-white text-xl lg:text-xl text-center `)}>
              Around same time of NFT creation, receive $PEACE tokens with an initial utility and purpose: recognizing
              civils. This action will be the core value and utility of this token.
            </p>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill={tw(`${'red'}`)} className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`text-center text-2xl lg:text-2xl lg:text-2xl px-2 lg:px-6 py:4  rounded-xl`)}>
                Multilateral <span className={tw(`text-yellow-600`)}> Ackt</span>
              </div>
            </div>
            <p className={tw(`text-center leading-loose text-white text-xl lg:text-xl`)}>
              With $PEACE tokens, we can acknowledge each others' expressions and demands, via self and co-assuring
              efforts towards making a world peace.
            </p>

            <div
              className={tw(` lg:my-8 mt-6  text-center font-bolder  text-black lg:text-xl bg-green-400 rounded-full`)}
            >
              <a href="https://en.wikipedia.org/wiki/World_peace" target="_blank" referrerPolicy="no-referrer">
                <img className={tw(`h-16 w-16`)} src="logo.png" alt="world peace" />
              </a>
            </div>
          </div>
          {/* <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="green" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Acknowledge Each Other</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              With $PEACE tokens, Anyone can acknowledge each others' expressions and demands, hence efforts towards
              achieving the 1st world peace.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="green" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Acknowledge Each Other</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              With $PEACE tokens, Anyone can acknowledge each others' expressions and demands, hence efforts towards
              achieving the 1st world peace.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
