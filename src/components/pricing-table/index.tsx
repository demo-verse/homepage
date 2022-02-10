import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Quote from '@/constants/svg/quote.svg';
import Link from 'next/link';
import SocialProof from '@/components/social-proof';

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
  <section className={tw(`bg-gradient-to-b  pt-12 sm:ml-6 sm:mr-6 lg:ml-20 lg:mr-20`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex `)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1 text-center`)}>
          {/* <p className={tw(`lg:bg-red-300 underline mt-6 text-base leading-6 text-gray-800 lg:text-xl mb-6 lg:mb-12`)}>
            <a href="https://www.youtube.com/watch?v=pFS4zYWxzNA" target="_blank">
              Best, in peace.
            </a>
          </p> */}
          {/* <div className={tw(`w-full item-center lg:w-full md:w-1/3 mt-12 lg:m-w/10 ml-4 lg:ml-12 lg:mt-0`)}> */}
          <a href="https://en.wikipedia.org/wiki/World_peace" target="_blank" referrerPolicy="no-referrer">
            <img className={tw(`h-32 w-32`)} src="logo.png" alt="world peace" />
          </a>

          {/* </div> */}

          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12 mt-10`)}>Why blockchain for peace?</h2>
          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Resources and rights are interacting, as if they are living in domains of the chicken-egg problems. One
            requiring the other one before coming alive.
          </p>
          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Here exists a paradox: neither resources without rights, or rights without resources progress can reach
            their full potential without collaboration. We need to shift to somewhere, where there exists no box.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Since more than 10 years, we are moving towards decentralised and empowering, as well as liberating
            structures. It all started with Satoshi Nakamoto's introduction of Bitcoin and consensus being used as
            verification.
          </p>
          {/* <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Decentralisation is about empowerment of freedom, for 7+ billions of people. With blockchain, we can
            reliably share resources in a borderless and incentivising fashion.
          </p> */}
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl mb-4 lg:mb-8`)}>
            As we are moving forward to #web3, as civilisation, we are experiencing sovereignity in financial and
            decision-making processes.
          </p>

          <SocialProof />
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            The project, demoVerse exists for exploring potential public discussions catalyzing a historical change for
            a peaceful regeneration via co-imagination and realisation.
          </p>

          <p className={tw(`mb-6 lg:mb-10 mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            With this perspective, blockchain technology is enabling us on sharing rights, as well as resources. This
            will be in a form of, shaping the future, from now.
          </p>

          <p className={tw(`mt-4 mb-10 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Here, blockchain and NFTs (smart contracts) in core, are reflection and technical tools of making demands,
            acknowledgements, expressions, promises, statements and hence, assurances.
          </p>

          <div className={tw(`w-full lg:mb-12 md:mb-8 mb-8`)}>
            <iframe
              width="100%"
              height="420"
              src="https://miro.com/app/live-embed/uXjVOX94E5k=/?moveToViewport=-414571,-110139,444707,260570"
              scrolling="no"
            ></iframe>
            {/* <iframe width="768" height="432" src="https://miro.com/app/embed/uXjVOX94E5k=/?pres=1&frameId=3458764517450232776" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
            {/* <iframe width="100%" height="180" src="https://www.youtube.com/embed/gJme0rYsO0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>

          <div className={tw(` flex flex-wrap lg:mt-12 `)}>
            <div className={tw(`w-full md:w-1/2 `)}>
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/10M0xw3UgCo"
                allowFullScreen
              ></iframe>
            </div>
            <div className={tw(` w-full md:w-1/2 `)}>
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/V6-pQSWjwqc"
                title="Wax Tailor - The Games You Play"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>

          <Quote className={tw(`w-8 md:w-8 left-0 md:-left-2 top-0 pl-4 md:pl-0 lg:mt-6 text-gray-500`)}></Quote>
          <p className={tw(`text-base leading-6 text-gray-800 lg:text-4xl text-center`)}>
            Blockchain belongs to all, as power does.
          </p>

          {/* <p className={tw(`text-base leading-6 text-gray-800 lg:text-2xl mt-4`)}>
            // peace is green; fear no more. Express yourself!
          </p> */}
          {/* <div className={tw(`md:mt-4 md:mb-8 lg:mt-6 item-center`)}>
            <img src="/images/peace-is-green.png"></img>
          </div> */}

          <p className={tw(` mt-6 text-base leading-6 text-gray-800 lg:text-xl  text-center`)}>
            All have a born right to offer a change and take initiative.
          </p>

          <div
            className={tw(
              ` mt-6 flex md:mt-4 md:mb-8 lg:mt-6 object-none object-center bg-yellow-300 w-42 h-42 lg:py-4`,
            )}
          >
            <img src="/images/morpheus.png" className={tw(`lg:object-center lg:ml-8 sm:m-2`)}></img>

            {/* <p className={tw(`text-base text-bolder leading-6 text-gray-800 lg:text-xl lg:w/2  text-center  lg:mt-12`)}>
            This can cherish from open minds and hearts, who shares and feels stake and even
            responsibility.
          </p> */}
          </div>
          <p
            className={tw(
              `mt-6 text-base text-bolder leading-6 text-gray-800 md:text-l text-center lg:mt-14 lg:text-2xl md:mt-16 sm:mt-4 md:ml-6`,
            )}
          >
            <Quote className={tw(`w-6 md:w-6 left-4 md:-left-2 top-0 pl-4 md:pl-0 lg:mt-6 text-gray-500`)}></Quote>
            There is no bottom or up; that's an illusion.
          </p>

          <p
            className={tw(
              `bg-blue-400 mt-6 text-base leading-6 text-gray-800 lg:text-xl bg:yellow-200 text-center lg:py-4 `,
            )}
          >
            <a href="https://www.youtube.com/watch?v=cyQ0s0J1fhY" target="_blank">
              We don't need eyes to see, we need vision.
            </a>
          </p>
          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl text-center `)}>
            That can be observed via empowering all, that are taking steps on pursuing creative and borderless journeys
            in minds and, that are to be peaceful and healthy in everywhere and for everyone.
          </p>

          <p
            className={tw(
              `text-base text-bolder leading-6 text-gray-800 lg:text-xl lg:w/2 md:text-l sm:text-l sm:py-4 sm:px-4 sm:w/2 text-center lg:mt-6`,
            )}
          >
            21st century will be observing a decentralised civilisation, competing in good stuff, while scaling and
            sharing them.
          </p>

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

          <img src="demoverse.svg" alt="logo" className={tw(``)} />

          <p
            className={tw(
              `flex text-base leading-6 text-gray-200 lg:text-2xl bg-green-600 text-center lg:py-12 md:py-12 `,
            )}
          >
            This is our dream restoration;
          </p>
          <p
            className={tw(
              `sm:text-sm mt-0 leading-6 text-gray-100 lg:text-2xl bg-yellow-800 text-center lg:px-6 lg:py-12 md:py-12`,
            )}
          >
            @ regenerations.
          </p>

          <div className={tw(`lg:mt-12 md:mt-8 sm:mt-6`)}>
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/LKdnxBH031I" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
