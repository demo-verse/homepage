import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.png" />

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `var script = document.createElement("script");
script.onload = function () {
    upvoty.init('render', {
        'boardHash': '169c8c75d7e8754e44f85f42ee38ec4745ee4184f18c5ae4b399540477148c7b',
        'ssoToken': null,
        'baseUrl': 'demoverse.upvoty.com'
    });
};
document.head.appendChild(script);
script.src = 'https://demoverse.upvoty.com/javascript/upvoty.embed.js';`,
        }}
      /> */}
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
