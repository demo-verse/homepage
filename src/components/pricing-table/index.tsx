import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Quote from '@/constants/svg/quote.svg';
import Link from 'next/link';
// import SocialProof from '@/components/social-proof';

import ExpressonOfPeace from '../header/ExpressionOfPeace';

const features = [
  `peaceful`,
  `free-minded`,
  `carbon-offsetting`,
  `undeniable`,
  `resilient`,
  `based on consensus`,
  `demanding`,
  `censor-free`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b sm:ml-6 sm:mr-6 lg:ml-20 lg:mr-20`)}>
    <div className={tw(`relative max-w-7xl mx-auto`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex `)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1 text-center`)}>
          {/* <p className={tw(`lg:bg-red-300 underline mt-6 text-base leading-6 text-gray-800 lg:text-xl mb-6 lg:mb-12`)}>
            <a href="https://www.youtube.com/watch?v=pFS4zYWxzNA" target="_blank">
              Best, in peace.
            </a>
          </p> */}
          {/* <div className={tw(`w-full item-center lg:w-full md:w-1/3 mt-12 lg:m-w/10 ml-4 lg:ml-12 lg:mt-0`)}> */}

          {/* </div> */}

          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-6 lg:mb-8 mt-10`)}>
            Why blockchain for world peace?
          </h2>

          <p className={tw(`text-base leading-6 text-gray-800 lg:text-4xl text-center`)}>
            "Blockchain belongs to all, as power does."
          </p>

          <div
            className={tw(
              ` mt-8 flex md:mt-4 md:mb-8 lg:mt-6 object-none object-center bg-yellow-300 w-42 h-42 lg:py-4`,
            )}
          >
            <img src="/images/morpheus.png" className={tw(`lg:object-center lg:ml-8 sm:m-2`)}></img>
            {/* <p className={tw(`text-base text-bolder leading-6 text-gray-800 lg:text-xl lg:w/2  text-center  lg:mt-12`)}>
            This can cherish from open minds and hearts, who shares and feels stake and even
            responsibility.
          </p> */}
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/zMsnnH7Tu34"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              
            ></iframe>
            {/* marvina reynolds - little boxes*/}
            {/* <iframe
              width="100%"
              // src="https://www.youtube.com/embed/pFS4zYWxzNA"
              src="https://www.youtube.com/embed/r5IKpHTEuY0"
              allowFullScreen
              className={tw(`lg:mx-8 lg:my-2`)}
            ></iframe> */}
            /{' '}
          </div>
          {/* <img src="demoverse-logo-horizontal.png" alt="logo" width={120} height={60} className={tw(`rounded-full bg-black`)} /> */}

          {/* <p className={tw(`text-base leading-6 text-gray-800 lg:text-2xl mt-4`)}>
            // peace is green; fear no more. Express yourself!
          </p> */}
          {/* <div className={tw(`md:mt-4 md:mb-8 lg:mt-6 item-center`)}>
            <img src="/images/peace-is-green.png"></img>
          </div> */}

          {/* <p className={tw(` mt-6 text-base leading-6 text-gray-800 lg:text-2xl  text-center`)}>
            All have a born right to offer a change and take initiative.
          </p>

          <p
            className={tw(
              `text-base text-bolder leading-6 text-gray-800 md:text-l text-center lg:mt-14 lg:text-2xl md:mt-16 sm:mt-4 md:ml-6`,
            )}
          >
            There is no bottom or up; that's an illusion.
          </p>

          <p className={tw(` mt-6 text-base leading-6 text-gray-800 lg:text-xl bg:yellow-200 text-center lg:py-4 `)}>
            <a href="https://www.youtube.com/watch?v=cyQ0s0J1fhY" target="_blank">
              We don't need eyes to see, we need vision.
            </a>
          </p> */}
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            {/* demoVerse  */}
            demoVerse exists to explore potential ways of using technology for freedom.
          </p>

          <p className={tw(`mt-4 mb-6 lg:mb-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            For this vision, blockchain technology is enabling us on sharing rights, as well as resources.
          </p>

          <p className={tw(`mt-4 mb-6 lg:mb-2 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Consensus is what we need to solve global problems.
          </p>
          <p className={tw(`mt-4 mb-6 lg:mb-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Peace is that consensus, that needs consensus in the first place.
          </p>

          <p className={tw(`mt-4 lg:mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Here, blockchain and smart contracts, in core, technical tools of reflection;
          </p>
          <p className={tw(`text-base leading-6 text-gray-800 lg:text-xl`)}>
            for making expressions, demands and acknowledgements,
          </p>
          <p className={tw(` text-base leading-6 text-gray-800 lg:text-xl`)}>assurances to the rest of the world.</p>

          <p className={tw(`mt-4 lg:mt-8 text-base leading-6 text-gray-800 lg:text-xl`)}>
            This well may be in forms of, writing social and environmental contracts,
          </p>

          <p className={tw(` text-base leading-6 text-gray-800 lg:text-xl`)}>that are writing a future, from now.</p>

          <p className={tw(` lg:mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>Together. </p>

          {/*           
          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Resources and rights are interacting and living in the domains of so called, chicken-egg problems. One
            requiring the other one before coming alive.
          </p>

          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Here exists a paradox: neither resources without rights, or rights without resources; a progress can reach
            their full potentials.          
          </p> */}

          {/* <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            We need to shift to somewhere, where exists no box; and walls already fell for those, that are clearly
            exposed to fear, more than love and care.
          </p> */}

          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Since more than 10 years, we are moving towards decentralised and empowering, as well as liberating
            structures.
          </p>
          <p className={tw(`bg-yellow-300 mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            It all started with Satoshi Nakamoto's introduction of Bitcoin and consensus being used as verification.
          </p> */}
          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Decentralisation is about empowerment of freedom, for 7+ billions of people. With blockchain, we can
            reliably share resources in a borderless and incentivising fashion.
          </p> */}
          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl mb-4 lg:mb-8`)}>
            As we are moving forward to #web3, as civilisation, we are experiencing sovereignity in financial and
            decision-making processes.
          </p> */}

          {/* <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl text-center `)}>
            That can be observed via empowering all, that are taking steps on pursuing creative and borderless journeys
            in minds and, that are to be peaceful and healthy in everywhere and for everyone.
          </p> */}

          <p
            className={tw(
              `text-base text-bolder leading-6 text-gray-800 lg:text-xl lg:w/2 md:text-l sm:text-l sm:py-4 sm:px-4 sm:w/2 text-center lg:mt-4`,
            )}
          >
            21st century will be observing a decentralised civilisation.
          </p>

          <p
            className={tw(
              `text-base text-bolder  text-gray-800 lg:text-xl lg:w/2 md:text-l sm:text-l sm:py-4 sm:px-4 sm:w/2 text-center lg:mt-0 lg:mb-16 mb-10`,
            )}
          >
            Competing in good stuff, while scaling and sharing them with all.
          </p>

          <iframe
            width="100%"
            height="662"
            src="https://miro.com/app/live-embed/uXjVOX94E5k=/?moveToViewport=-416978,-324908,567200,420000"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/n9e0g5s_LCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           */}

          {/* <div className={tw(`ml-4 flex items-center mt:20 md:ml-6` )}>
            
          </div> */}

          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Blockchain not changing the world with artificial or augmented realities. It has already broghth new
            realities and an open space for learning and non-violent and impact-driven and creative communities.
          </p> */}

          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            This will be our restoration as civilisation, a game theory imagined for the 21st century:
          </p> */}

          {/* call for politicians */}

          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Hereby, expecting governments of relatively democratic countries, taking better and earlier actions, and
            achieve their full potential in positive, creative and emancipating direction.
            </p>
            
            <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Those will be known in the history, as peace and solution makers and signers, showing intention on
            reflecting the societies. Others will be known as fossils, with fossil energy and strategic resources.
            </p>
            <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            In fact, this project is giving a chance to existing people with governing entitlements to seal common
            wishes and realities: a desire to live in peace, rather than resting in peace only.
            </p>
          */}

          {/* <img className={tw(` mr-4`)} src="demoverse.png" alt="logo" width={120} height={120} /> */}
          {/* 
          <p
            className={tw(
              `text-xl mt-10 leading-6 text-gray-100 lg:text-2xl bg-green-600 text-center lg:px-6 py-6 lg:py-12 md:py-12`,
            )}
          >
            this is a restoration of freedom,
          </p>
          <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-yellow-800 text-center lg:px-6 py-6 lg:py-12 md:py-12`,
            )}
          >
            with expressions for the planetary peace and regeneration.
          </p> */}
          {/* 
          <div className={tw(` flex flex-wrap lg:mt-12 `)}>
            <div className={tw(`w-full md:w-1/2 `)}>
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/uAOR6ib95kQ"
                allowFullScreen
              ></iframe>
            </div>
            <div className={tw(` w-full md:w-1/2 `)}>
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/Vn8phH0k5HI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div> */}

          {/*     
          <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-black text-center lg:px-6 px-2 py-4`,
            )}
          >
            blockchain is transparent, resilient, secure, peer-to-peer, decentralised and more.
          </p>
          <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-black text-center lg:px-6 px-2 py-4`,
            )}
          >
            that's technologically and most probably, motivation-wise.
          </p> */}

          {/* <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-black text-center lg:px-6 px-2 py-4 `,
            )}
          >
            all we need to declare the 1st World Peace, as a result of learnings from the history,
          </p> */}

          {/* <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-black text-center lg:px-6 px-2 py-6 `,
            )}
          >
            let's write the future, from now,on blockchain
          </p>
          <p
            className={tw(
              `text-xl mt-0 leading-6 text-gray-100 lg:text-2xl bg-black text-center lg:px-6 px-2 py-4 `,
            )}
          >
           while reflecting to now
            and the future.
          </p> */}
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
