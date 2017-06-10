import React from 'react'
import { getIcon } from './utils'

class StockItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { stock } = this.props
    return (
      <div className='stock-item'>
        <div className='stock-item-name'>
          <p>{stock.name}</p>
          <p>Financial Services</p>
        </div>
        <div className='stock-item-price'>
          <p>{`$ ${stock.price}`}</p>
        </div>
        <i onClick={() => { this.props.addPortfolioItem(stock) }}>{ getIcon('plus')}</i>
      </div>
    )
  }
}

export default StockItem
