import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Individuals`,
    description: `We, as residents of the world, can effectively express what peace means for us.
    We believe, world peace will be a result of effective expressions of billions, rather than negotiations of a few, compared to our well-populated civilisation.
    For that to be achieved, we demand a new right, that is being exempt from taxation for military investments and actions, regardless of being defensive or offensive.`,
  },

  {
    title: `Non-Governmental Organisations`,
    description: `We need United Nations and any peaceful initiatives/NGOs to initially acknowledge those demands and take them as proof of civil.`,
  },
  {
    title: `States`,
    description: `States, in most cultures, are sacred entities and security is one of basic services they provide. The most costly one. A defensive infrastructure is an offensive one, relatively to their own citizens and also ones beyond their borders. But if most of `,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 text-2xl lg:text-4xl font-semibold tracking-wide uppercase`)}>
          Demanding a new right
        </h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          as world residents
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            {/* <FeatureSvg width="100%" height="100%" /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
