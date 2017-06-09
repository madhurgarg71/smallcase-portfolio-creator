import React from 'react'
import TableItem from './TableItem'

class ManagePortfolio extends React.Component {
  render() {
    return (
      <section>
        <span className='section-sticker'>manage portfolio</span>
        <div className='stocks-table table'>
          <div className='head row'>
            <div className='cell'>stock</div>
            <div className='cell'>price</div>
            <div className='cell'>shares</div>
            <div className='cell'>weight</div>
          </div>
          {
            [1, 2, 3, 4].map((item, i) => {
              return <TableItem key={`tableItem${i}`} />
            })
          }
        </div>
      </section>
    )
  }
}

export default ManagePortfolio
