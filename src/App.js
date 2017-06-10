import React, { Component } from 'react'
import './index.scss'
import { getPriceData } from './utils'

import StocksPool from './StocksPool'
import ManagePortfolio from './ManagePortfolio'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemList: [],
      priceData: getPriceData()
    }
    this.updatePortfolioItemList = this.updatePortfolioItemList.bind(this)
    this.removePortfolioItem = this.removePortfolioItem.bind(this)
    this.addPortfolioItem = this.addPortfolioItem.bind(this)
    this.shareDecerementor = this.shareDecerementor.bind(this)
    this.shareIncrementor = this.shareIncrementor.bind(this)
    this.removeStock = this.removeStock.bind(this)
    this.addStock = this.addStock.bind(this)
  }

  addPortfolioItem(stock) {
    const { portfolioItemList } = this.state
    let updatedPortfolioItemList = portfolioItemList.slice()

    updatedPortfolioItemList.push(this.createPortfolioItem(stock))
    this.setState({
      portfolioItemList: updatedPortfolioItemList
    })
    this.removeStock(stock.id)
  }

  removeStock(id) {
    const { priceData } = this.state
    let updatedStocksPool = priceData.filter(item => {
      return item.id !== id
    })

    this.setState({
      priceData: updatedStocksPool
    })
  }

  addStock(stock) {
    const { priceData } = this.state
    let updatedStocksPool = priceData.slice()

    updatedStocksPool.push(this.createStockItem(stock))
    this.setState({
      priceData: updatedStocksPool
    })
  }

  createStockItem(stock) {
    return {
      id: stock.id,
      name: stock.name,
      price: stock.price
    }
  }

  createPortfolioItem(stock) {
    return {
      id: stock.id,
      name: stock.name,
      price: stock.price,
      shares: 1,
      weightage: 0
    }
  }

  removePortfolioItem(id) {
    const { portfolioItemList } = this.state
    let stock

    let updatedPortfolioItemList = portfolioItemList.filter((item) => {
      if (item.id === id) {
        stock = item
        return false
      }
      return true
    })
    this.setState({ portfolioItemList: updatedPortfolioItemList })
    this.addStock(stock)
  }

  shareIncrementor(stock) {
    const updatedStock = Object.assign({}, stock)
    updatedStock.shares += 1
    this.updatePortfolioItemList(updatedStock)
  }

  shareDecerementor(stock) {
    const updatedStock = Object.assign({}, stock)
    if (updatedStock.shares > 1) {
      updatedStock.shares -= 1
    }
    this.updatePortfolioItemList(updatedStock)
  }

  updatePortfolioItemList(stock) {
    const { portfolioItemList } = this.state

    let updatedPortfolioItemList = portfolioItemList.map((item) => {
      return item.id === stock.id ? stock : item
    })
    this.setState({ portfolioItemList: updatedPortfolioItemList })
  }

  render() {
    const { portfolioItemList, priceData } = this.state
    return (
      <div className='portfolio-wrapper'>
        <div className='portfolio-container'>
          <h3>smallcase Portfolio Builder</h3>

          <StocksPool
            addPortfolioItem={this.addPortfolioItem}
            priceData={priceData}
          />

          <ManagePortfolio
            shareIncrementor={this.shareIncrementor}
            shareDecerementor={this.shareDecerementor}
            portfolioItemList={portfolioItemList}
            removePortfolioItem={this.removePortfolioItem}
          />

        </div>
      </div>
    )
  }
}
