import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import ExpressonOfPeace from '../header/ExpressionOfPeace';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-4xl text-blue-600  tracking-wide `)}>Peace, as a service, on blockchain</h4>
          <p className={tw(`mt-10 text-xl lg:text-2xl ftracking-tight text-gray-900`)}>
            First time in the history, as collective expressions, acknowledgements and assurances of billions, instead
            of negotiations of hundreds.
          </p>

          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight text-gray-900`)}>
            <span className="underline">Peace it is something</span> to experience and sustain{' '}
            <span className="underline">without risk</span> of political opt-outs.
          </p>

          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight text-gray-900`)}>
            <span className="underline">Peace is an unconditional basic experience</span>, that cannot be limited within
            alliances. It shall be contained within our civilisation, as a whole,{' '}
            <span className="underline">from the 21st century forwards.</span>
          </p>

          <p className={tw(`mt-8 text-xl lg:text-2xl ftracking-tight text-gray-900`)}>
            Here and there,{' '}
            <span className="underline">
              boosting planetary regeneration with a worldwide disarmament and peace vision.
            </span>
          </p>
          <p className={tw(` mb-8 mt-4 text-xl lg:text-2xl font-bold tracking-tight text-gray-900`)}>
            "the revolution will be minted"
          </p>

          <div className={tw(`mt:12 lg:mb:8`)}>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/5r98tT0j1a0" allowFullScreen></iframe>
          </div>
        </div>
        <ExpressonOfPeace />

        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="orange" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}> Read a Social Contract </div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Read a version of Expression of Peace. This is version zero (EoP #0). There'll be new versions proposed
              individually and collectively. With you, hopefully.
            </p>
          </div>
          {/* give possibility for conditions */}
          {/* Including demands, and hopes, denouncing wars and and speaking to people mostly, that are invited to co-imagine peace. */}

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="red" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Sign one for World Peace</div>
            </div>
            <p className={tw(`leading-loose text-gray-800 `)}>
              Connect your crypto wallet {'&'} sign an Expression of Peace, on blockchain. That's how our motivations
              can resiliently and indisputably exist, forever.
            </p>
          </div>

          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl mt-2`)}>You've got an NFT!</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Following this intentional move towards world peace, a Non-Fungible and Non-Tradable Token will be minted
              to your wallet.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="purple" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-2 text-xl`)}>Join PeaceMaker DAO</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              With these NFTs existing in a wallet, anyone can join the PeaceMaker DAO, a decentralized autonomous
              organisation of all.
            </p>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="blue" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}> Have some $PEACE</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Around same time of NFT creation, receive $PEACE tokens with an initial utility and purpose: recognizing
              civils. This action will be the core value of this token.
            </p>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="green" className={tw(`h-14 w-14 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Acknowledge Each Other</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              With $PEACE tokens, we can acknowledge each others' expressions and demands, hence self-assuring efforts
              towards achieving the 1st world peace.
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
