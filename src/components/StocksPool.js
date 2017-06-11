import React from 'react'
import { getIcon } from './../utils'
import StockItem from './StockItem'

class StocksPool extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(stock) {
    this.props.addPortfolioItem(stock)
  }

  render() {
    const { stocksData } = this.props
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
            stocksData.map((item, i) => {
              return <StockItem
                addPortfolioItem={this.handleClick}
                stock={item}
                key={`stock${i}`}
              />
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
