import React from 'react';

const TxLinks = ({
  walletChain,
  burnTxHash,
}) => {
  return (
    <div className='tx_links'>
      <AppTooltip
        title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
      >
        <AppExtLink
          url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
          className='header_link'
        >
          Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
        </AppExtLink>
      </AppTooltip>
    </div>
  );
};

export default TxLinks;