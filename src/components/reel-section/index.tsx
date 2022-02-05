import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
// import Play from '@/constants/svg/play.svg';

// const PlayButton = () => (
//   <button
//     type="button"
//     className={tw(
//       `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
//       -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
//     )}
//     aria-label="play video"
//   >
//     <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
//     <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
//   </button>
// );

const ReelSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0 mb-8 lg:mb-8`)}>
            {/* https://www.youtube.com/embed/22GEvDupWGo */}

            {/* say yes */}
            <iframe width="100%" height="420" src="https://www.youtube.com/embed/XRz-_u2tN0c" allowFullScreen></iframe>

            {/* que sera */}
            {/* <iframe width="100%" height="420" src="https://www.youtube.com/embed/7I18_VNjX3g" allowFullScreen></iframe> */}
          </div>
          {/* <div className={tw(`relative shadow-2xl mx-6 lg:mx-0 mb-8 lg:mb-12`)}>
         
            <iframe width="100%" height="420" src="https://www.youtube.com/embed/45cYwDMibGo" allowFullScreen></iframe>

          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default ReelSection;
