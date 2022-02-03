import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `based on consensus`,
  `transparent + anonymous`,
  `censorship-free`,
  `resilient infrastructure`,
  `freedom-oriented`,
  `undeniable`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b   pt-12 sm:ml-6 sm:mr-6 lg:ml-20 lg:mr-20`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Why blockchain?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            Resources and rights are like chicken-egg problems. With blockchain, we can share resources in a borderless
            fashion.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            Since more than 10 years, we are experiencing decentralised and empowering, as well as liberating
            structures.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            Centralisation means talking about thousands and millions maybe. Decentralisation is about billions of
            people.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            As we move forward as civilisation, to #web3, we'll have our sovereignity, in our pockets.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            It's about expressing that and acknowledging for each other.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            By this perspective, blockchain is also enabling the share of rights, along with resources and writing a
            future on blockchain.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            Blockchain not changing the world with artificial or augmented realities. It has already broghth new
            realities and an open space for learning and non-violent and impact-driven and creative communities.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            This will be our restoration as civilisation, a game theory imagined for the 21st century.
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            Expecting governments of relatively democratic countries, relatively earlier:
          </p>

          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            So that they'll be known in the history as peace and solution makers and signers, showing intention on
            reflecting the societies.
          </p>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500 lg:text-xl`)}>
            In fact, this project is a global empowerment of existing politicians to reflect societies and peaceful
            calls and demands, via taking action around achieving world peace.
          </p>

          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase  lg:text-2xl`,
                )}
              >
                socio & environmental contracts
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600 lg:text-xl`)}>{feature}</p>
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
          {/* <p className={tw(`text-lg font-medium text-gray-800`)}>Resilient</p> */}

          {/* <Button primary modifier="mt-6"> */}
          <div>
            <img src="/images/morpheus.png"></img>
          </div>

          <div className={tw(`mt-20`)}>
            <iframe width="100%" height="420" src="https://www.youtube.com/embed/jW4VZ5J0fNQ" allowFullScreen></iframe>
          </div>
          {/* </Button> */}
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
