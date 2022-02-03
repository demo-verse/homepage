import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Yoko Ono`,
    company: `Multimedia artist, singer, songwriter and peace activist`,
    image: `/images/yoko_ono.png`,
    text: `A dream you dream alone is only a dream. A dream you dream together is reality.`,
  },
  {
    name: `Nelson Mandela`,
    company: `Anti-apartheid revolutionary, political leader and philanthropist`,
    image: `/images/nelson_mandela.jpg`,
    text: `Sometimes it falls upon a generation to be great. You can be that generation.`,
  },
  {
    name: `Martin Luther King, Jr.`,
    company: `Activist leader in the civil rights movement`,
    image: `/images/martin_luther_king_jr.webp`,
    text: `If we are to have peace on earth.. Our loyalties must transcend our race, our 
    tribe, our class, and our nation; and this means we must develop a world perspective.`,
  },

  {
    name: `Albert Einstein`,
    company: `Theoretical Physicist`,
    image: `/images/einstein.jpg`,
    text: `Peace cannot be kept by force; it can only be achieved by understanding.`,
  },
  {
    name: `Alexander von Humbold`,
    company: `Polymath, geographer, naturalist, explorer, and proponent of Romantic philosophy and science`,
    image: `/images/alexander_von_humboldt.jpg`,
    text: `The most dangerous worldviews are the worldviews of those who have never viewed the world.
    `,
  },

  {
    name: `Jürgen Habermas`,
    company: `Philosopher and sociologist in the tradition of critical theory and pragmatism`,
    image: `/images/juergen_habermas.png`,
    text: `A 'post-truth democracy' would no longer be a democracy.`,
  },

  {
    name: `Charles Montesquieu`,
    company: `Judge, man of letters, historian, and political philosopher`,
    image: `/images/charles_montesquieu.jpg`,
    text: `The tyranny of a prince in an oligarchy is not so dangerous to the public welfare as the apathy
    of a citizen in a democracy`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <section>
          <figure>
            <div className={tw(`relative bg-gray`)}>
              <Quote className={tw(`w-16 md:w-10 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-500`)} />
              <div className={tw(`pt-12 px-6 md:px-0`)}>
                <p className={tw(`text-gray-600 text-base pb-6`)}>{socialProofs[currentIndex].text}</p>
                <div className={tw(`flex items-center justify-between`)}>
                  <div className={tw(`flex items-center pb-12`)}>
                    <div className={tw(`h-16 w-16`)}>
                      <img
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={tw(`text-gray-800 font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={tw(`text-gray-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={tw(`cursor-pointer flex pr-20 pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={72}
                      height={72}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={72}
                      height={72}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="black"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
