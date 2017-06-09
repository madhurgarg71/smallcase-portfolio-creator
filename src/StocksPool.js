import React from 'react'
import { getIcon } from './utils'
import StockItem from './StockItem'

class StocksPool extends React.Component {
  render() {
    const { priceData } = this.props
    return (
      <section>
        <span className='section-sticker'>pick stocks</span>

        <div className='filter-bar'>
          <p>Showing 6 - 12 of 23 matching stocks</p>
          <button>
            <i>{ getIcon('funnel')}</i>
            <span>apply filters</span>
            <span className='filters-count'>3</span>
          </button>
        </div>

        <div className='stocks-pool'>
          {
            priceData.map((item, i) => {
              return <StockItem stock={item} key={`stock${i}`} />
            })
          }
        </div>

        <div className='pagination'>
          <button disabled>prev</button>
          <button>next</button>
        </div>
      </section>
    )
  }
}

export default StocksPool
