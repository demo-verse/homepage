import { tw } from 'twind';

// import Kilt from '@/constants/svg/kilt.svg';
// import IPFS from '@/constants/svg/ipfs.svg';

const solutions = [
  { name: 'Impact design', link: '/' },
  { name: 'Game theory', link: '/' },
  { name: 'Creative disruption', link: '/' },
];

const resources = [
  { name: 'Workspace', link: 'https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=47727813201' },
  { name: 'Articles', link: '/' },
  { name: 'References', link: '/' },
];

const contacts = [
  { name: 'Discord', link: 'https://discord.gg/CfGzp3st3k' },
  { name: 'Twitter', link: 'https://twitter.com/demoversal' },
  { name: 'Github', link: 'https://github.com/demo-verse' },
];

const Footer = () => {
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`flex justify-center w-full flex items-center`)}></div>
      <div className={tw(`max-w-12xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap `)}>
        <div className={tw(`flex w-full `)}>
          <ul className={tw(` flex flex-wrap w-full lg:ml-12`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3 `)}>
              <div>
                <h4 className={tw(`text-gray-900 text-xl lg:text-2xl font-bold mb-1`)}> @ earth</h4>
                <ul>
                  {contacts.map((contact) => (
                    <li
                      className={tw(`ml-2 lg:ml-8 text-gray-800 text-l lg:text-xl font-medium leading-6`)}
                      key={contact.name}
                    >
                      <a href={contact.link} target="_blank" referrerPolicy="no-referrer">
                        {contact.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className={tw(`mb-14 flex items-center w-full`)}></div>
              </div>
            </li>

            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-xl lg:text-2xl font-bold mb-1 `)}>Resources</h4>
                <ul>
                  {resources.map((resource) => (
                    <li
                      className={tw(` lg:ml-2 text-gray-800 text-l lg:text-xl font-medium leading-6`)}
                      key={resource.name}
                    >
                      <a href={resource.link} target="_blank" referrerPolicy="no-referrer">
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3 `)}>
              <div>
                <h4 className={tw(`text-gray-900 text-xl lg:text-2xl font-bold mb-1`)}>Solutions</h4>
                <ul>
                  {solutions.map((solution) => (
                    <li className={tw(`text-gray-800 text-l lg:text-xl font-medium leading-6`)} key={solution.name}>
                      <a href={solution.link} target="_blank" referrerPolicy="no-referrer">
                        {solution.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div
                className={tw(` lg:my-8 text-center font-bolder  text-black lg:text-xl bg-green-500 rounded-full mr-8`)}
              >
                <a href="https://en.wikipedia.org/wiki/World_peace" target="_blank" referrerPolicy="no-referrer">
                  {/* <img className={tw(`h-16 w-16`)} src="logo.png" alt="world peace" /> */}
                  <img src="logo.png" alt="logo" width={62} height={62} />
                </a>
              </div>
            </li>
            <li>
              <div
                className={tw(
                  ` lg:my-8 mt-6  text-center font-bolder  text-black lg:text-xl bg-yellow-400 rounded-full`,
                )}
              >
                <a href="/">
                  {/* <img className={tw(`h-16 w-16`)} src="logo.png" alt="world peace" /> */}
                  <img src="demoverse.svg" alt="logo" width={120} height={120} />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* <div className={tw(`w-full items-center lg:w-full md:w-1/3 mt-12 lg:m-w/10 ml-4 lg:ml-12 lg:mt-0`)}>
          <div className={tw(`text-center border border-gray-900 rounded py-5 px-4 lg:mr-20 text-black bg:violet-700`)}>
            <p className={tw(`underline upperline text-lg`)}>WorldPeace #1</p>
            <p className={tw(`mt-4`)}>
              <a href="https://www.youtube.com/watch?v=4Dyh3WCAj7M" target="_blank" referrerPolicy="no-referrer">
                (already)
              </a>
            </p>
            <p>started </p>

            <p className={tw(`mt-2`)}>in Hamburg, Germany. </p>

            <p className={tw(`mt-6`)}> (re)generating peace, </p>
            <p className={tw(`mt-2`)}> essentially and globally. </p>

            <p className={tw(`mt-2`)}> // no more fear. </p>
          </div>
        </div> */}

        {/* newsletter subs  */}
        {/* <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
          <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
            <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>subscribe to newsletter</h4>
            <div className={tw(`flex w-full`)}>
              <input
                aria-label="email address"
                type="text"
                className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
                placeholder="Enter your email"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
