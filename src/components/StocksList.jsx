import React from 'react';
import { Detector } from "react-detect-offline";
import MarketTrendArrow from './MarketTrendArrow.jsx';
import StockRow from './StockRow.jsx';

const StocksList = (props) => {
  return (
    <div className='card column is-one-third' id='stocks_list'>
      <div className='card-header'>
        <div className='card-header-title'>
          Stocks
          &nbsp;
          <Detector
            render={({ online }) => (
              <span className={online ? "tag is-success" : "tag is-danger"}>
                {online ? "Live" : "Offline"}
              </span>
            )}
          />
          &nbsp;
          <button className='button is-small' onClick={props.resetData}>Clear history</button>
          <button className='button is-small'>Your Stocks</button>
        </div>
      </div>
      <div className='card-content'>
        { props.areStocksLoaded() ? <p className='is-size-7 has-text-info'>Click on a stock to select/unselect</p> : null }
        <table className='table is-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                Value
                <MarketTrendArrow current_trend={props.market_trend} />
              </th>
              <th>History</th>
              <th>Updated At</th>
              <th>Action</th>
              {/* <th>Buy/Sell</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.stocks).map((stock_name, index) =>
              {
                let current_stock = props.stocks[stock_name];
                return (
                  <StockRow
                    key={index} 
                    stock_name={stock_name}
                    stock_data={current_stock}
                    toggleStockSelection={props.toggleStockSelection}
                  >
                    <button>Button</button>
                  </StockRow>
                  
                  
                )
              }
            )}
            { props.areStocksLoaded() ? null : <tr><td colSpan='4'>No stocks loaded yet!</td></tr> }
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default StocksList;
