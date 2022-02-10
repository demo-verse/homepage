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

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto lg:pt-8`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0 mb-8 lg:mb-12`)}>
            {/* <Preferences width="100%" height="100%" /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/45cYwDMibGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe width="100%" height="520" src="https://www.youtube.com/embed/AR9BwHSO0_8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe width="100%" height="420" src="https://www.youtube.com/embed/45cYwDMibGo" allowFullScreen></iframe> */}

            {/* <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* tedx */}

            {/* come together */}
            {/* <iframe width="100%" height="420" src="https://www.youtube.com/embed/45cYwDMibGo" allowFullScreen></iframe> */}

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/5r98tT0j1a0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <ReactPlayer url='https://nobelmedia.akamaized.net/flashcontent/acceptance_1964_pea_king_01_496.mp4' /> */}
            {/* <video width="100%" height="540" autoPlay loop style={{ width: '500px', height: '500px' }}>
              <source src="https://nobelmedia.akamaized.net/flashcontent/acceptance_1964_pea_king_01_496.mp4" />
            </video> */}
            {/* <a
              href="https://www.nobelprize.org/prizes/peace/1964/king/acceptance-speech"
            >
              Marting Luther King, Jr.'s Peace Speech @ Nobel Prize Acceptance Ceramony
            </a>
            https://nobelmedia.akamaized.net/flashcontent/acceptance_1964_pea_king_01_496.mp4
         
         
         
         https://www.nobelprize.org/prizes/peace/1964/king/acceptance-speech/ */}
            {/* <iframe width="100%" height="420" src="https://www.youtube.com/embed/08BmDkcHg9w" allowFullScreen></iframe> */}
            {/* <iframe width="100%" height="520" src="https://www.youtube.com/embed/PTlsKfEmIFM" allowFullScreen></iframe> */}
            {/* thrill is gone */}
            {/* <iframe width="100%" height="420" src="https://www.youtube.com/embed/SgXSomPE_FY" allowFullScreen></iframe> */}
            {/* <PlayButton /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
