import React from 'react'
import TableItem from './TableItem'

class PortfolioTable extends React.Component {
  render() {
    const { portfolioItemList, shareIncrementor, shareDecerementor, removePortfolioItem } = this.props
    return (
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
              shareIncrementor={shareIncrementor}
              shareDecerementor={shareDecerementor}
              removePortfolioItem={removePortfolioItem}
              item={item}
              key={`tableItem${i}`}
            />
          })
        }
      </div>
    )
  }
}

export default PortfolioTable
