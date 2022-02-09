import { tw } from 'twind';

const BlockchainTechnology = () => {
  return (
    <div
      className={tw(
        `lg:mt-8 mt-4 text-center border border-gray-900 rounded py-5 px-4 lg:mr-20 text-black bg:violet-700`,
      )}
    >
      <ul>
        <li className={tw(`text-base text-xl  leading-6 mt-2`)}>
          <a href="" target="_blank">
            Smart contracts
          </a>
        </li>
        <li className={tw(`text-base text-xl  leading-6 mt-2`)}>
          <a href="" target="_blank">
            Non-Fungible Tokens ~ #NFT
          </a>
        </li>
        <li className={tw(`text-base text-xl  leading-6 mt-2`)}>
          <a href="" target="_blank">
            Non-Transferrable Tokens ~ #NTT
          </a>
        </li>

        <li className={tw(`text-base text-xl  leading-6 mt-2 mt-2`)}>
          <a href="" target="_blank">
            Decentralised Finance ~ #DeFi
          </a>
        </li>
        <li className={tw(`text-base text-xl  leading-6 mt-2 mt-2`)}>
          <a href="" target="_blank">
            Regenerative Finance ~ #ReFi
          </a>
        </li>

        <li className={tw(`text-base text-xl  leading-6 mt-2`)}>
          <a href="" target="_blank">
            Progressive Decentralisation
          </a>
        </li>
        <li className={tw(`text-base text-xl  leading-6 mt-2`)}>
          <a href="" target="_blank">
            Decentralised Autonomous Organisations ~ #DAO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlockchainTechnology;
