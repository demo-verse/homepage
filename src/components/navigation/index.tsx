import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import Link from 'next/link';

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
    label: `community`,
    href: `https://discord.gg/CfGzp3st3k`,
  },
  {
    label: `artworks`,
    href: `https://xdai.unique.one/profile/demoverse`,
  },
  {
    label: `workspace`,
    href: `https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=638195022576`,
  },
  {
    label: `guild`,
    href: `https://guild.xyz/peacemakers`,
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

  return (
    <nav className={tw(`bg-purple-300`)}>
      <div className={tw(`max-w-7xl mx-auto px-2 sm:px-4 lg:px-4`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0 mr-12`)}>
              <img className={tw(`h-16 w-16`)} src="logo.png" alt="logo" width={120} height={120} />
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <Button modifier="border-60 text-black bg-yellow-800 lg:ml-4 lg:px-4 lg:py-4 mx-2">
                <Link href="https://discord.gg/CfGzp3st3k">
                  <a className={tw(`bg-yellow-300 text-bolder sm:text-xl lg:text-xl  lg:px-4 lg:py-4`)} target="_blank">
                    community
                  </a>
                </Link>
              </Button>

              <Button modifier="border-60 text-black bg-red-800 lg:ml-4 lg:px-4 lg:py-4 mx-2">
                <Link href="https://xdai.unique.one/profile/demoverse">
                  <a className={tw(`bg-yellow-300 text-bolder sm:text-xl lg:text-xl  lg:px-4 lg:py-4`)} target="_blank">
                    artworks
                  </a>
                </Link>
              </Button>
              <Button modifier="border-60 text-black bg-black lg:ml-4 lg:px-4 lg:py-4 mx-2">
                <Link href="https://miro.com/app/board/uXjVOX94E5k=/?invite_link_id=638195022576">
                  <a className={tw(`bg-yellow-300 text-bolder sm:text-xl lg:text-xl  lg:px-4 lg:py-4`)} target="_blank">
                    imagination
                  </a>
                </Link>
              </Button>

              <Button modifier="border-60 text-black bg-purple-800 lg:ml-4 lg:px-4 lg:py-4 mx-2">
                <Link href="https://guild.xyz/peacemakers">
                  <a
                    className={tw(`bg-yellow-300 text-bolder sm:text-xl lg:text-xl  lg:px-4  px-2 lg:py-4`)}
                    target="_blank"
                  >
                    guild
                  </a>
                </Link>
              </Button>
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

export default Navigation;
