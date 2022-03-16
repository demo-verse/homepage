import { tw } from 'twind';
import { useState } from 'react';
import useCollapse from 'react-collapsed';
import Button from '@/components/button';
import Link from 'next/link';
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

// const links = [
//   // {
//   //   label: `Expression of Peace`,
//   //   href: `/`,
//   // },
//   // {
//   //   label: `Why?`,
//   //   href: `/`,
//   // },
//   // {
//   //   label: `How?`,
//   //   href: `/`,
//   // },
//   // {
//   //   label: `Blog`,
//   //   href: `/`,
//   // },
// ];

const secondaryLinks = [
  {
    label: `expressions`,
    href: `https://expressions-editor.vercel.app`,
  },
  {
    label: `imagination`,
    href: `https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=638195022576`,
  },
  {
    label: `communities`,
    href: `https://discord.gg/CfGzp3st3k`,
  },
  {
    label: `artworks`,
    href: `https://xdai.unique.one/profile/demoverse`,
  },

  {
    label: `projection`,
    href: `https://trello.com/b/hUzyDssg/demoverse-a-journey-to-peace`,
  },
  {
    label: `peace guild`,
    href: `https://discord.gg/r6asuG6TD4`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    {/* <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div> */}
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            target="_blank"
            className={tw(`block px-3 py-2 text-base font-medium text-black`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <nav className={tw(`bg-purple-300 mr-0`)}>
      <div className={tw(` mx-auto px-2 px-2 lg:px-4`)}>
        {/* <div>
      <Toggle {...getToggleProps()}>{isExpanded ? 'Close' : 'Open'}</Toggle>
      <Collapse {...getCollapseProps()}>{excerpt}</Collapse>
    </div> */}
        <div className={tw(`flex items-center justify-between h-24 lg:mt-8 lg:mb-8 mb-2 mt-2`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0 mr-12`)}>
              <img className={tw(`h-22 w-22`)} src="logo.png" alt="logo" width={120} height={120} />
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6 lg:ml-22`)}>
              {/* <div>
          <button {...getToggleProps()}>
        {isExpanded ? 'Guilds' : 'Guilds'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
          </div> */}

              <ButtonPairLarge0 />
              <ButtonPairLarge1 />
              <ButtonPairLarge2 />

              {/* <Button modifier="border-60 text-black bg-blue-400 lg:ml-4 lg:px-4 lg:py-4 mx-2">
                <Link href="https://guild.xyz/peacemakers">
                  <a
                    className={tw(`bg-yellow-300 text-bolder sm:text-xl lg:text-xl  lg:px-4  px-2 lg:py-4`)}
                    target="_blank"
                  >
                    peacemakers
                  </a>
                </Link>
              </Button> */}
              {/* 
              <Button modifier="border-60 text-black bg-purple-800 lg:ml-4 lg:px-4 lg:py-4">
                <Link href="/">
                  <a className={tw(`bg-yellow-300 text-bolder sm:text-md lg:text-xl  lg:px-4 lg:py-4`)} target="_blank">
                    peace token (1Q)
                  </a>
                </Link>
              </Button> */}
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

const ButtonPairLarge0 = () => {
  return (
    <div>
      <Button modifier="border-60 text-black bg-blue-500 lg:ml-4 lg:px-4 lg:py-4">
        <Link href="https://expressions-editor.vercel.app">
          <a className={tw(`px-2 py-2 bg-yellow-300 text-bolder md:text-l lg:text-xl  lg:px-4 lg:py-3`)}>
            expresssions
          </a>
        </Link>
      </Button>
      <Button modifier="border-60 text-black bg-yellow-800 lg:ml-4 lg:px-4 lg:py-4 mt-2">
        <Link href="https://discord.gg/CfGzp3st3k">
          <a className={tw(`px-2 py-2 bg-yellow-300 text-bolder text-l lg:text-xl  lg:px-4 lg:py-3`)} target="_blank">
            community
          </a>
        </Link>
      </Button>
    </div>
  );
};

const ButtonPairLarge1 = () => {
  return (
    <div>
      <Button modifier="border-60 text-black bg-red-800 lg:ml-4 lg:px-4 lg:py-4 ">
        <Link href="https://xdai.unique.one/profile/demoverse">
          <a className={tw(`px-2 py-2 bg-yellow-300 text-bolder text-l lg:text-xl  lg:px-5 lg:py-3`)} target="_blank">
            artworks
          </a>
        </Link>
      </Button>

      <Button modifier="border-60 text-black bg-purple-500 lg:ml-4 lg:px-4 lg:py-4 mt-2">
        <Link href="https://discord.gg/r6asuG6TD4">
          <a className={tw(`px-4 py-2 bg-yellow-400 text-bolder text-l lg:text-xl  lg:px-8 lg:py-3`)} target="_blank">
            guild
          </a>
        </Link>
      </Button>
    </div>
  );
};

const ButtonPairLarge2 = () => {
  return (
    <div className={tw(``)}>
      <Button modifier=" border-20 lg:border-60 text-black bg-black lg:ml-4 lg:px-4 lg:py-4 px-2">
        <Link href="https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=638195022576">
          <a
            className={tw(`px-2 py-2 bg-yellow-300 text-bolder text-l lg:text-xl py-2 lg:px-4 lg:py-3 `)}
            target="_blank"
          >
            imagination
          </a>
        </Link>
      </Button>

      <Button modifier="border-60 text-white bg-green-400 lg:ml-4 lg:px-4 lg:py-4  mt-2">
        <Link href="https://trello.com/b/hUzyDssg/demoverse-a-journey-to-peace">
          <a className={tw(`px-3 py-2 bg-black text-bolder text-l lg:text-xl  lg:px-6 lg:py-3`)} target="_blank">
            projection
          </a>
        </Link>
      </Button>
    </div>
  );
};

export default Navigation;
