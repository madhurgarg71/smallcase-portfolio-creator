import React, { Component } from 'react'
import './index.scss'
// import merge from 'lodash.merge'
import { getPriceData } from './utils'

import StocksPool from './StocksPool'
import ManagePortfolio from './ManagePortfolio'


export default class App extends Component {
  render() {
    return (
      <div className='portfolio-wrapper'>
        <div className='portfolio-container'>
          <h3>smallcase Portfolio Builder</h3>
          <StocksPool priceData={getPriceData()} />
          <ManagePortfolio />
        </div>
      </div>
    )
  }
}
