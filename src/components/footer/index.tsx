import { tw } from 'twind';
import Button from '@/components/button';

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
  { name: 'Twitter', link: 'https://twitter.com/demoversal' },
  { name: 'Github', link: 'https://github.com/demo-verse' },
  { name: 'Discord', link: 'https://discord.gg/CfGzp3st3k' },
];

const Footer = () => {
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`flex justify-center w-full`)}></div>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
        {/* <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(` mr-4`)} src="demoverse.svg" alt="logo" width={120} height={120} />
      </div> */}
        <div className={tw(`w-full lg:w-1/2`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Contact</h4>
                <ul>
                  {contacts.map((contact) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={contact.name}>
                      <a href={contact.link} target="_blank" referrerPolicy="no-referrer">
                        {contact.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
                <ul>
                  {resources.map((resource) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={resource.name}>
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
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Solutions</h4>
                <ul>
                  {solutions.map((solution) => (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={solution.name}>
                      <a href={solution.link} target="_blank" referrerPolicy="no-referrer">
                        {solution.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
