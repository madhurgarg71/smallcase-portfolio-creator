import React from 'react'
import PortfolioTable from './PortfolioTable'
import TotalPanel from './TotalPanel'
var LineChart = require("react-chartjs").Line;

class ManagePortfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemList: props.portfolioItemList,
      netWorth: props.netWorth,
      PE_Ratio: props.PE_Ratio
    }
    this.shareIncrementor = this.shareIncrementor.bind(this)
    this.shareDecerementor = this.shareDecerementor.bind(this)
    this.removePortfolioItem = this.removePortfolioItem.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      portfolioItemList: nextProps.portfolioItemList,
      netWorth: nextProps.netWorth,
      PE_Ratio: nextProps.PE_Ratio
    })
  }

  setNetWorthAtDate() {
    const { portfolioItemList } = this.state
    let newPortfolioItemList = portfolioItemList.map(stock => {
      return stock
    })
    console.log(newPortfolioItemList);
  }

  getChartData () {
    // this.setNetWorthAtDate()
    return {
      labels:[1, 3, 4],
      datasets: [
        {
          borderWidth: 1,
          fillColor: 'rgba(151,187,205,0.2)',
          responsive: true,
          data: [1, 4, 5]
        }
      ]
    }
  }


  shareIncrementor(stock) {
    this.props.shareIncrementor(stock)
  }

  shareDecerementor(stock) {
    this.props.shareDecerementor(stock)
  }

  removePortfolioItem(id) {
    this.props.removePortfolioItem(id)
  }

  render() {
    const { portfolioItemList, netWorth, PE_Ratio } = this.state
    return (
      <section>
        <span className='section-sticker'>manage portfolio</span>
        <div className='panel portfolio'>
          <PortfolioTable
            portfolioItemList={portfolioItemList}
            shareIncrementor={this.shareIncrementor}
            shareDecerementor={this.shareDecerementor}
            removePortfolioItem={this.removePortfolioItem}
          />
        </div>

        <div className='panel graph'>
          <LineChart data={this.getChartData()} />
        </div>

        <div className='panel total-panel'>
          <TotalPanel
            totalStocks={portfolioItemList.length}
            netWorth={netWorth}
            PE_Ratio={PE_Ratio}
          />
        </div>
      </section>
    )
  }
}

export default ManagePortfolio
