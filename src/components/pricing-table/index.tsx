import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Quote from '@/constants/svg/quote.svg';
import Link from 'next/link';

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
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
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
            Resources and rights are like chicken-egg problems. One expects the other one before coming alive.
          </p>
          <p className={tw(`mt-4 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Here exists a paradox in the paradox: wealth without rights, not rights and rights not necessarily creating
            resources and assets. We need to shift from this mentality and pragma.
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

          <div className={tw(`flex items-center`)}>
            <div className={tw(`mt-2`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 leading-5
    tracking-wider font-semibold text-xl lg:text-xl mb-4 text-sm `,
                )}
              >
                EnvironMental
              </h3>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 leading-5
    tracking-wider font-semibold text-xl lg:text-xl mb-4 text-sm `,
                )}
              >
                -Consensus Contracts
              </h3>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 leading-5
    tracking-wider font-semibold text-xl lg:text-xl mb-4 text-sm `,
                )}
              >
                aka. e~mc^2
              </h3>
            </div>
            <div>
              <ul
                className={tw(
                  `lg:mt-4 sm:mt-2 lg:grid md:grid-cols-2 lg:grid-cols-2 md-grid md:grid-cols-2 sm-grid sm:grid-cols-2`,
                )}
              >
                {features.map((feature) => (
                  <li className={tw(`flex items-center  lg:col-span-1`)} key={feature}>
                    <div className={tw(`flex-shrink-1`)}>
                      <Check className={tw(`h-8 w-8 mr-3`)} />
                    </div>
                    <p className={tw(`text-black lg:text-l md:text-base text-l ml-2 mr-2`)}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3
            className={tw(
              `flex-shrink-0 pr-4 leading-5
    tracking-wider font-semibold  lg:text-2xl mb-4 ml-8`,
            )}
          ></h3>

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
          <div className={tw(`w-full`)}>
            <iframe
              width="100%"
              height="420"
              src="https://miro.com/app/live-embed/uXjVOX94E5k=/?moveToViewport=-414571,-110139,444707,260570"
              scrolling="no"
            ></iframe>
            {/* <iframe width="768" height="432" src="https://miro.com/app/embed/uXjVOX94E5k=/?pres=1&frameId=3458764517450232776" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
            {/* <iframe width="100%" height="180" src="https://www.youtube.com/embed/gJme0rYsO0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>

          <div className={tw(`md:mt-4 md:mb-8 lg:mt-6 lg:ml-8`)}>
            <img src="/images/morpheus.png"></img>
          </div>

          <Quote className={tw(`w-8 md:w-8 left-0 md:-left-2 top-0 pl-4 md:pl-0 lg:mt-6 text-gray-500`)}></Quote>
          <p className={tw(`text-base leading-6 text-gray-800 lg:text-2xl`)}>
            Blockchain belongs to everyone, as power does.
          </p>

          {/* <p className={tw(`text-base leading-6 text-gray-800 lg:text-2xl mt-4`)}>
            // peace is green; fear no more. Express yourself!
          </p> */}
          {/* <div className={tw(`md:mt-4 md:mb-8 lg:mt-6 item-center`)}>
            <img src="/images/peace-is-green.png"></img>
          </div> */}

          <p className={tw(`mt-6 text-base text-bolder leading-6 text-gray-800 lg:text-xl `)}>
            <span className={tw(`underline`)}>There is no bottom or up</span> ; a decentralised civilisation, that is
            competitive in good.. This can cherish from approachable mindsets that shares and feels stake and
            responsibility. That can be observed via empowerin all, that are taking steps on pursuing creative and
            borderless journeys in minds and, that are to be peaceful and healthy in everywhere and for everyone.
          </p>

          <p className={tw(`mt-2 text-base leading-6 text-gray-800 lg:text-xl `)}></p>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/n9e0g5s_LCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           */}

          <p className={tw(` mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            All have a born right to offer a change and take initiative.
          </p>

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

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl bg:yellow-200 `)}>
            <a href="https://www.youtube.com/watch?v=cyQ0s0J1fhY" target="_blank">
              We don't need eyes to see ~ we need a vision
            </a>
          </p>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          {/* <div className={tw(`mt-10`)}>
            <iframe width="100%" height="420" src="https://www.youtube.com/embed/OTFbLA1JDIU" allowFullScreen></iframe>
          </div> */}

          {/* <div className={tw(`mt-10`)}>
            <iframe width="100%" height="420" src="https://www.youtube.com/embed/jW4VZ5J0fNQ" allowFullScreen></iframe>
          </div> */}
          {/* </Button> */}
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
