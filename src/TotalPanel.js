import React from 'react'

const TotalPanel = ({ totalStocks, netWorth, PE_Ratio }) => {
  return (
    <div>
      <div className='table'>
        <div className='row'>
          <div className='cell'>
            <p>Stocks</p>
            <p>{ totalStocks }</p>
          </div>
          <div className='cell'>
            <p>Net Worth</p>
            <p>{ netWorth }</p>
          </div>
        </div>
        <div className='row'>
          <div className='cell'>
            <p>P/E Ratio</p>
            <p>{ PE_Ratio }</p>
          </div>
          <div className='cell'>
            <p>P/B Ratio</p>
            <p>N/A</p>
          </div>
        </div>
      </div>

      <button>build portfolio</button>
    </div>
  )
}

export default TotalPanel
