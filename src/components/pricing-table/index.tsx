import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Quote from '@/constants/svg/quote.svg';
import Link from 'next/link';

const features = [
  `non-violent`,
  `carbon-offsetter`,
  `undeniable`,
  `freedom-oriented`,
  `based on consensus`,
  `resilient as planet`,
  `censorship-free`,
  `decentralised`,
  `free of charge`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b   pt-12 sm:ml-6 sm:mr-6 lg:ml-20 lg:mr-20`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex `)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Why blockchain?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            Resources and rights are like chicken-egg problems. One expects the other one before coming alive.
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
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            As we are moving forward to #web3, as civilisation, we are experiencing sovereignity in financial and
            decision-making processes.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            With this perspective, this technology also enabling us on sharing rights, as well as resources and hence,
            as a civilisation, on co-imagining and shaping the future, from now.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            As now our world is connected, we feel that it's the same roof on all, or we are all on the same boat; those
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            shall be, continuous and reflective and harmonious upgrade resonating to the soul of time and planet,
            holistically.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            <a href="https://iep.utm.edu/soc-cont/" target="_blank" className={tw(`underline`)}>
              Social
            </a>
            +
            <a href="https://iep.utm.edu/soc-cont/" target="_blank" className={tw(`underline`)}>
              environmental
            </a>
            ~ EnvironMental Contracts (e-mc) to be gifted for the 21st century and forwards.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            We have this tech already. People, and tech are open and connected to each other.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            We have this tech already. People, and tech are open and connected to each other.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            The project exists for opening discussions on co-imagining and initiating a historical change for a peaceful
            regeneration.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            All have a born right to offer a change and take initiative.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>
            No need to say, feel invited to {'>> '}
            <Button modifier="border-60 text-black bg-violet-700">
              <Link href="https://discord.gg/CfGzp3st3k">
                <a className={tw(`text-bolder sm:text-md lg:text-xl`)} target="_blank">
                  discord
                </a>
              </Link>
            </Button>
          </p>
          {/* <div className={tw(`ml-4 flex items-center mt:20 md:ml-6` )}>
            
          </div> */}

          <div className={tw(`md:mt-8 md:mb-8 lg:mt-12`)}>
            <img src="/images/morpheus.png"></img>
          </div>
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

          <Quote className={tw(`w-16 md:w-10 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-800`)} />

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl bg:yellow-200 underline`)}>
            <a href="https://www.youtube.com/watch?v=cyQ0s0J1fhY" target="_blank">
              We don't need eyes to see ~
            </a>

            <a href="https://www.youtube.com/watch?v=cyQ0s0J1fhY" target="_blank">
              we need a world vision.
            </a>
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-800 lg:text-xl`)}>Best, in peace.</p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold  lg:text-xl lg:mb-6  mb-4`,
                )}
              >
                with socio-environmental contracts that are:
              </h3>

              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`lg:mt-8 md:mt-4 sm:mt-2 lg:grid lg:grid-cols-2 md-grid md:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center  lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-1`)}>
                    <Check className={tw(`h-8 w-8 mr-3`)} />
                  </div>
                  <p className={tw(`text-gray-600 lg:text-xl md:text-base sm:text-sm`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
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
