import React from "react";
//import AppIcon,AppChip, AppExtLink

const BurnTopBar = ({
    walletChain,
    suppliesChain,
    tokenAddress,
    openChainModal,
    IconFilter
}) => {
  return <div className='top_bar'>
  <AppIcon
    url='/images/token/App_new.svg'
    size={2}
    margin={0}
    fill={IconFilter.unset}
  />
  <p className='label'>App SUPPLY</p>
  <AppChip
    onClick={openChainModal}
    title={walletChain?.name || '---'}
    endIcon={'/icons/expand_more.svg'}
    startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
  ></AppChip>
  <AppExtLink
    className=' supply_label'
    url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
  >
    View Contract
  </AppExtLink>
</div>
};

export default BurnTopBar;