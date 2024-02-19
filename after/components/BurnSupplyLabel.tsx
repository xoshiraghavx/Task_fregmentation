import React from 'react';

const BurnStatSupplyLabelList = ({
  statsSupplies,
  allSupplies,
  chainTokenSymbols,
  walletChain,
}) => {
  return (
    <div className='supply_label_list'>
      <div>
        <p className='supply_label'>
          <span className='hyphen orange'></span>
          <span className='text'>Burnt App Tokens</span>
          <span className='percent orange'>
            {(100 - statsSupplies.circulatingPercent).toFixed(2)}%
          </span>
        </p>
        <p className='supply_value'>
          <AppIcon
            size={1.25}
            url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            fill={IconFilter.unset}
            margin={0}
          />
          {numberWithCommas(
            statsSupplies.totalSupply - statsSupplies.circulatingSupply
          )}
        </p>
        <div className='full_supply'>
          Original App Token Initial Supply:
          {numberWithCommas(statsSupplies.totalSupply)}
        </div>
      </div>
      <div>
        <p className='supply_label'>
          <span className='hyphen green'></span>
          <span className='text'>Circulating App Tokens</span>
          <span className='percent green'>
            {statsSupplies.circulatingPercent.toFixed(2)}%
          </span>
        </p>
        <p className='supply_value'>
          <AppIcon
            size={1.25}
            url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            fill={IconFilter.unset}
            margin={0}
          />
          {numberWithCommas(statsSupplies.circulatingSupply)}
        </p>
        {allSupplies
          .filter((s) => s.chainId != walletChain?.id)
          .map((s: any) => (
            <p key={s.chainId} className='supply_value mini'>
              <AppIcon
                size={1.25}
                url={`/images/token/${
                  chainTokenSymbols.get(s.chainId) ?? 'ETH'
                }.svg`}
                fill={IconFilter.unset}
                margin={0}
              />
              {numberWithCommas(s.circulatingSupply)}
            </p>
          ))}
      </div>
    </div>
  );
};

export default BurnStatSupplyLabelList;