import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-4xl text-blue-600 font-semibold tracking-wide `)}>World peace as a service, on blockchain</h4>
          <p className={tw(`mt-6 text-xl lg:text-2xl font-bold tracking-tight text-gray-900`)}>
            To be expressed and acknowledged by billions, 
          </p>
          <p className={tw(`mt-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900`)}>
          rather than negotiated by hundreds. 
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Read </div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Read the Expression of Peace. Beware, there exists highly peaceful statements that would even sound, anarchist. So be it.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Sign</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Persist an Expression of Peace, on blockchain: your intention will be in the history, forever. Undeniably, and censorship-free.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>ACKnowledge</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              adadadasd
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Join DAO</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet
              reprehenderit.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>have $PEACE</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
              consectetur.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}> Observe Peace</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              asdas
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
