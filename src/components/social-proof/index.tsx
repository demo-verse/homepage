import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

export const socialProofs = [
  {
    name: `Yoko Ono`,
    company: `Multimedia artist, singer, songwriter and peace activist`,
    image: `/images/yoko_ono.png`,
    info_url: ``,
    extra_url: ``,
    text: `A dream you dream alone is only a dream. A dream you dream together is reality.`,
  },
  {
    name: `Albert Einstein`,
    company: `Theoretical Physicist, part-time violinist`,
    image: `/images/einstein.jpg`,
    info_url: ``,
    extra_url: `https://www.youtube.com/watch?v=AR9BwHSO0_8`,
    text: `Peace cannot be kept by force; it can only be achieved by understanding.`,
  },
  // {
  //   name: `Bertrand Russell`,
  //   company: `Polymath, academic, who worked in philosophy, mathematics, logic, set theory, linguistics, artificial intelligence, cognitive science, computer science `,
  //   image: `/images/Bertrand_Russell.jpg`,
  //   info_url: `https://en.wikipedia.org/wiki/Bertrand_Russell`,
  //   extra_url: `https://www.youtube.com/watch?v=AR9BwHSO0_8`,
  //   text: `Shall we put an end to the human race; or shall mankind renounce war?`,
  // },
  {
    name: `Nelson Mandela`,
    company: `Anti-apartheid revolutionary, political leader and philanthropist`,
    image: `/images/nelson_mandela.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `Sometimes it falls upon a generation to be great. You can be that generation.`,
  },

  {
    name: `Greta Thunberg`,
    company: `Environmental activist `,
    image: `/images/greata_thunberg.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `I’ve learnt that no one is too small to make a difference. Your silence is almost worst of all.`,
  },
  {
    name: `Paulette Walker`,
    company: `Musician (on web, info about them at this time)`,
    image: `/images/paulette-walker.jpg`,
    info_url: `https://www.discogs.com/artist/1280999-Paulette-Walker`,
    extra_url: `https://www.youtube.com/watch?v=PTlsKfEmIFM`,
    text: `Let the world unite, no fussing no fighting.`,
  },
  {
    name: `Martin Luther King, Jr.`,
    company: `Activist leader in the civil rights movement`,
    image: `/images/martin_luther_king_jr.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `If we are to have peace on earth.. Our loyalties must transcend our race, our 
    tribe, our class, and our nation; and this means we must develop a world perspective.`,
  },
  {
    name: `Mother Teresa`,
    company: `Saint Teresa of Calcutta`,
    image: `/images/mother_teresa.png`,
    info_url: ``,
    extra_url: ``,
    text: `If we have no peace, it is because we have forgotten that we belong to each other.`,
  },

  {
    name: `Mahatma Gandhi`,
    company: `Lawyer, anti-colonialist, political ethicist`,
    image: `/images/Mahatma-Gandhi,_studio,_1931.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `The day the power of love overrules the love of power, the world will know peace`,
  },

  {
    name: `Jürgen Habermas`,
    company: `Philosopher and sociologist in the tradition of critical theory and pragmatism`,
    image: `/images/juergen_habermas.png`,
    info_url: ``,
    extra_url: ``,
    text: `A 'post-truth democracy' would no longer be a democracy.`,
  },

  //
  // {
  //   name: `Alexander von Humbold`,
  //   company: `Polymath, geographer, naturalist, explorer, and proponent of Romantic philosophy and science`,
  //   image: `/images/alexander_von_humboldt.jpg`,
  //   text: `The most dangerous worldviews are the worldviews of those who have never viewed the world.
  //   `,
  // },

  {
    name: `Luce Irigaray`,
    company: `feminist, philosopher, linguist, psycholinguist, psychoanalyst and cultural theorist`,
    image: `/images/luce_irigaray.jpg`,
    info_url: ``,
    extra_url: `https://www.theguardian.com/books/2010/jan/06/leo-tolstoy-the-last-station`,
    text: `Why only one song, one speech, one text at a time?" - when our lips speak together.`,
  },
  {
    name: `Leo Tolstoy`,
    company: `Novelist, short story writer, playwright, essayist`,
    image: `/images/Leo_tolstoy.png`,
    info_url: ``,
    extra_url: `https://www.theguardian.com/books/2010/jan/06/leo-tolstoy-the-last-station`,
    text: `If everyone fought for their own convictions there would be no war.`,
  },

  {
    name: `Sigmund Freud`,
    company: `Neurologist and the founder of psychoanalysis`,
    image: `/images/sigmund_freud.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `Words can do unspeakable good and cause terrible wounds.`,
  },

  

  {
    name: `Gilles Deleuze`,
    company: `Philosopher, post-structuralist, empiricist and a vitalist`,
    image: `/images/deleuze.jpg`,
    info_url: ``,
    extra_url: ``,
    text: `A concept is a brick. It can be used to build a courthouse of reason or it can be thrown through the window.`,
  },
  {
    name: `Henry David Thoreau`,
    company: `Naturist essayist, poet, philosopher and leading transcendentalist`,
    image: `/images/henry_david_thoreau.jpg`,
    info_url: `https://en.wikipedia.org/wiki/Henry_David_Thoreau`,
    extra_url: ``,
    text: `The question is not what you look at, but what you see.`,
  },

  // {
  //   name: `Charles Montesquieu`,
  //   company: `Judge, man of letters, historian, and political philosopher`,
  //   image: `/images/charles_montesquieu.jpg`,
  //   text: `The tyranny of a prince in an oligarchy is not so dangerous to the public welfare as the apathy
  //   of a citizen in a democracy`,
  // },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto bg-purple-300 px-4 lg:px-8`)}>
      <div className={tw(`max-w-7xl mx-auto relative `)}>
        <section>
          <figure>
            <div className={tw(``)}>
              <div className={tw(`pt-12 px-2 lg:px-6 md:px-0`)}>
                <p className={tw(`text-black-600 text-xl lg:text-2xl pb-6 `)}>{socialProofs[currentIndex].text}</p>
                <div className={tw(`flex items-center justify-between`)}>
                  <div className={tw(`flex items-center pb-12`)}>
                    <div className={tw(`lg:ml-12 lg:mr-12 mr-4 ml-4 mt-8`)}>
                      <img
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={tw(`lg:h-64 lg:w-64 h-32 w-32  object-cover overflow-hidden rounded-full`)}
                      />
                    </div>
                    <p className={tw(`text-black-800 text-2xl font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={tw(`text-black-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <div className={tw(`cursor-pointer flex lg:ml-16 ml-20 lg:ml-40  mr-6 `)}>
            <div className={tw(`container flex`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width={62}
                // height={62}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={previous}
                className={tw(`lg:w-${'32'} lg:h-${'32'}  w-${'12'} h-${'12'}`)}
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </div>
            <div className={tw(`container flex`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width={62}
                // height={62}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={next}
                className={tw(`lg:w-${'32'} lg:h-${'32'}  w-${'12'} h-${'12'}`)}
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
