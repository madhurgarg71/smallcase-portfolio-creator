import React, { Component } from 'react'
import './../index.scss'
import { getStocksData } from './../utils'

import StocksPool from './../components/StocksPool'
import ManagePortfolio from './../components/ManagePortfolio'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemList: [],
      stocksData: getStocksData(),
      netWorth: 0.00,
      PE_Ratio: 0.00
    }
    this.updatePortfolioItem = this.updatePortfolioItem.bind(this)
    this.removePortfolioItem = this.removePortfolioItem.bind(this)
    this.addPortfolioItem = this.addPortfolioItem.bind(this)
    this.shareDecerementor = this.shareDecerementor.bind(this)
    this.shareIncrementor = this.shareIncrementor.bind(this)
    this.removeStock = this.removeStock.bind(this)
    this.addStock = this.addStock.bind(this)
    this.updateMetric = this.updateMetric.bind(this)
    this.setWeightage = this.setWeightage.bind(this)
  }

  addPortfolioItem(stock) {
    const { portfolioItemList } = this.state
    let updatedPortfolioItemList = portfolioItemList.slice()

    updatedPortfolioItemList.push(this.createPortfolioItem(stock))
    this.setState({
      portfolioItemList: updatedPortfolioItemList
    }, this.updateMetric)
    this.removeStock(stock.id)
  }

  removeStock(id) {
    const { stocksData } = this.state
    let updatedStocksPool = stocksData.filter(item => {
      return item.id !== id
    })

    this.setState({
      stocksData: updatedStocksPool
    })
  }

  addStock(stock) {
    const { stocksData } = this.state
    let updatedStocksPool = stocksData.slice()

    updatedStocksPool.push(this.createStockItem(stock))
    this.setState({
      stocksData: updatedStocksPool
    })
  }

  createStockItem(stock) {
    return {
      id: stock.id,
      name: stock.name,
      price: stock.price,
      eps: stock.eps,
      historical: stock.historical
    }
  }

  createPortfolioItem(stock) {
    return {
      id: stock.id,
      name: stock.name,
      price: stock.price,
      eps: stock.eps,
      historical: stock.historical,
      shares: 1,
      weightage: 0.00
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
    this.setState({
      portfolioItemList: updatedPortfolioItemList
    }, this.updateMetric)

    this.addStock(stock)
  }

  shareIncrementor(stock) {
    const updatedStock = Object.assign({}, stock)
    updatedStock.shares += 1
    this.updatePortfolioItem(updatedStock)
  }

  shareDecerementor(stock) {
    const updatedStock = Object.assign({}, stock)
    if (updatedStock.shares > 1) {
      updatedStock.shares -= 1
    }
    this.updatePortfolioItem(updatedStock)
  }

  updatePortfolioItem(stock) {
    const { portfolioItemList } = this.state

    let updatedPortfolioItemList = portfolioItemList.map((item) => {
      return item.id === stock.id ? stock : item
    })
    this.setState({
      portfolioItemList: updatedPortfolioItemList
    }, this.updateMetric)
  }

  setNetWorth() {
    const { portfolioItemList } = this.state
    const netWorth = portfolioItemList.reduce((networth, stock) => {
      return networth + stock.price * stock.shares
    }, 0)

    this.setState({ netWorth: netWorth.toFixed(2) }, this.setNetWorthDenpendentData)
  }

  setNetWorthDenpendentData() {
    this.setWeightage()
    this.setPE_Ratio()
  }

  setWeightage() {
    const { portfolioItemList, netWorth } = this.state
    const updatedPortfolioItemList = portfolioItemList.map(stock => {
      stock.weightage = ((stock.price * stock.shares) / netWorth).toFixed(2)
      return stock
    })

    this.setState({ portfolioItemList: updatedPortfolioItemList })
  }

  setPE_Ratio() {
    const { portfolioItemList, netWorth } = this.state
    const totalEps = portfolioItemList.reduce((totalEps, stock) => {
      console.log(totalEps, stock.eps, stock.shares);
      return totalEps + stock.eps * stock.shares
    }, 0)

    // console.log(netWorth, totalEps);
    if (portfolioItemList.length) {
      this.setState({ PE_Ratio: (netWorth / totalEps).toFixed(2) })
    } else {
      this.setState({ PE_Ratio: 0.00 })
    }
  }

  getHistoricalMatrix() {
    const { portfolioItemList } = this.state
    const historicalMatrix = []
    portfolioItemList.forEach(stock => {
      historicalMatrix.push(stock.historical)
    })
    return historicalMatrix
  }

  updateMetric() {
    this.setNetWorth()
  }

  render() {
    const { portfolioItemList, stocksData, netWorth, PE_Ratio } = this.state
    return (
      <div className='portfolio-wrapper'>
        <div className='portfolio-container'>
          <h3>smallcase Portfolio Builder</h3>

          <StocksPool
            addPortfolioItem={this.addPortfolioItem}
            stocksData={stocksData}
          />

          {
            portfolioItemList.length
            ? <ManagePortfolio
              netWorth={netWorth}
              PE_Ratio={PE_Ratio}
              shareIncrementor={this.shareIncrementor}
              shareDecerementor={this.shareDecerementor}
              portfolioItemList={portfolioItemList}
              removePortfolioItem={this.removePortfolioItem}
            />
            : ''
          }

        </div>
      </div>
    )
  }
}
