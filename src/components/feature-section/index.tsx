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
            className={tw(`font-sans font-bold text-3xl md:text-4xl lg:text-6xl text-center leading-snug text-red-800`)}
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
          <p className={tw(`mt-4 text-xl lg:text-2xl ftracking-tight  text-white`)}>
            Shall be contained within our civilisation scaled as a world peace, from 21st century forwards.
          </p>
          <p className={tw(`mt-4 text-xl lg:text-2xl ftracking-tight text-white`)}>
            Here, boosting planetary regeneration with a worldwide disarmament and peace vision.
          </p>
          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight  text-white`)}>
            <span className="underline"> Looking for better user experiences, as world-wide residents.</span>
          </p>

          {/* come together */}
          <div className={tw(` flex flex-wrap lg:mt-12`)}>
            <div className={tw(`w-full md:w-1/2 `)}>
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/45cYwDMibGo"
                allowFullScreen
              ></iframe>
            </div>
            <div className={tw(` w-full md:w-1/2 `)}>
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jPeheoBa2_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/jT6yx2kTvFQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jT6yx2kTvFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </div>

          <p className={tw(` mb-8 mt-4 text-xl lg:text-2xl font-bold tracking-tight  text-white`)}>
            "the revolutions would minted"
          </p>
          <ExpressonOfPeace />
        </div>

        <div className={tw(`flex flex-wrap my-12 text-white`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="orange" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl lg:text-2xl`)}> Check the Social Contracts </div>
            </div>
            <p className={tw(`leading-loose text-white-200 text-l lg:text-xl`)}>
              Read a version of Expression of Peace. This is version zero (EoP #0). There'll be new versions proposed
              individually and collectively. With you, hopefully.
            </p>
          </div>
          {/* give possibility for conditions */}
          {/* Including demands, and hopes, denouncing wars and and speaking to people mostly, that are invited to co-imagine peace. */}

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 text-w`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="red" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl  lg:text-2xl`)}>Propose a new one or sign one</div>
            </div>
            <p className={tw(`leading-loose text-white text-l lg:text-xl`)}>
              Connect your crypto wallet, then create or sign an existing Expression of Peace, on blockchain. That's how
              our motivations can resiliently and indisputably exist, forever.
            </p>
          </div>

          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl mt-2 text-xl lg:text-2xl`)}>You've got an NFT!</div>
            </div>
            <p className={tw(`leading-loose text-white lg:text-xl`)}>
              Following this intentional move towards world peace, a Non-Fungible and Non-Tradable Token will be minted
              to your wallet.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="purple" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-2 text-l lg:text-2xl`)}>Join PeaceMaker DAO</div>
            </div>
            <p className={tw(`leading-loose text-white text-l lg:text-xl`)}>
              With these NFTs existing in a wallet, anyone can join the PeaceMaker DAO, a decentralized autonomous
              organisation of all.
            </p>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill={tw(`${'#00acee'}`)} className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}> Have some $PEACE</div>
            </div>
            <p className={tw(`leading-loose text-white text-l lg:text-xl`)}>
              Around same time of NFT creation, receive $PEACE tokens with an initial utility and purpose: recognizing
              civils. This action will be the core value of this token.
            </p>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <div className={tw(`text-xl lg:text-2xl bg-red-800 px-2 lg:px-6 py:4 lg:py-4 rounded-xl`)}>
                Multilateral Acknowledgement
              </div>
            </div>
            <p className={tw(`leading-loose text-white text-l lg:text-xl`)}>
              With $PEACE tokens, we can acknowledge each others' expressions and demands, hence self and co-assuring
              efforts towards achieving the 1st world peace.
            </p>
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
