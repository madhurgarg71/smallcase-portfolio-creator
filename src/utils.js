import React from 'react'
import { data } from './db'
import Moment from 'moment'
console.log(data)


export function getIcon(name) {
  switch (name) {
    case 'funnel':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
          <path fill="#00A9D2" fillRule="evenodd" d="M29.9142008,2.33533333 C29.7974303,2.128 29.5779018,2 29.33969,2 L6.6608583,2 C6.42731732,2 6.21179235,2.12333333 6.09235281,2.32333333 C5.97358054,2.52333333 5.96890972,2.77133333 6.0810094,2.976 L15.1564122,19.5753333 L15.1564122,33.3393333 C15.1564122,33.604 15.3145528,33.8433333 15.5594372,33.9466667 C15.6428447,33.9833333 15.7302557,34 15.8176668,34 C15.985149,34 16.1506295,33.936 16.2767416,33.8153333 L20.2209153,30.016 C20.3490292,29.8913333 20.4224278,29.7206667 20.4224278,29.5413333 L20.4224278,18.7466667 L29.9055264,3 C30.0283023,2.796 30.0316386,2.542 29.9142008,2.33533333 L29.9142008,2.33533333 Z"></path>
        </svg>
      )
    case 'plus':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
          <path fill="#FFFFFF" fillRule="evenodd" d="M18,2 C9.168,2 2,9.168 2,18 C2,26.832 9.168,34 18,34 C26.832,34 34,26.832 34,18 C34,9.168 26.832,2 18,2 L18,2 Z M26,19.6 L19.6,19.6 L19.6,26 L16.4,26 L16.4,19.6 L10,19.6 L10,16.4 L16.4,16.4 L16.4,10 L19.6,10 L19.6,16.4 L26,16.4 L26,19.6 L26,19.6 Z"/>
        </svg>
      )
      break
    default:
  }
}

export function getEpsData() {
  let epsData = []
  for (let stock in data.eps) {
    epsData.push({ name: stock, eps: data.eps[stock] })
  }
  return epsData
}

export function getPriceData() {
  let priceData = []
  let i = 0
  for (let stock in data.price) {
    priceData.push({ id: `s_${i++}_item`, name: stock, price: data.price[stock] })
  }
  return priceData
}

export function getHistoricalData() {
  let historicalData = []
  for (let stock in data.historical) {
    historicalData.push({ name: stock, historical: data.historical[stock] })
  }
  return historicalData
}

function mapHistoricPriceToDate(points) {
  let transformedPoints = {}
   points.forEach(item => {
    transformedPoints[Moment(item.date).format('MMM Do YYYY')] = item.price
  })
  return transformedPoints
}

export function constructStocksData() {
  const stocksData = []
  let i = 0
  for(let stockName in data.price) {
    stocksData.push({
      id: `s_${i++}_item`,
      price: data.price[stockName],
      eps: data.eps[stockName],
      name: stockName,
      historical: data.historical[stockName]
    })
  }
  return stocksData
}

export function getDates() {
  // console.log(Object.keys(getStocksData()[0].historical));
  // const dates = Object.keys(getStocksData()[0].historical)
  // dates.sort((a, b) => {
  //   return new Date(b) - new Date(a)
  // })
  // console.log(dates);
}

getDates()

export function getStocksData() {
  return constructStocksData()
}
