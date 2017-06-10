import React from 'react'
import TableItem from './TableItem'

class ManagePortfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioItemList: props.portfolioItemList
    }
    this.shareIncrementor = this.shareIncrementor.bind(this)
    this.shareDecerementor = this.shareDecerementor.bind(this)
    this.removePortfolioItem = this.removePortfolioItem.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ portfolioItemList: nextProps.portfolioItemList })
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
    const { portfolioItemList } = this.state
    return (
      <section>
        <span className='section-sticker'>manage portfolio</span>
        <div className='stocks-table table'>
          <div className='head row'>
            <div className='cell'>stock</div>
            <div className='cell'>price</div>
            <div className='cell'>shares</div>
            <div className='cell'>weight</div>
            <div className='cell'></div>
          </div>
          {
            portfolioItemList.map((item, i) => {
              return <TableItem
                shareIncrementor={this.shareIncrementor}
                shareDecerementor={this.shareDecerementor}
                removePortfolioItem={this.removePortfolioItem}
                item={item}
                key={`tableItem${i}`} />
            })
          }
        </div>
      </section>
    )
  }
}

export default ManagePortfolio
