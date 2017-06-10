import React from 'react'
import { getIcon } from './utils'

class TableItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props
    return (
      <div className='row'>
        <div className='cell'>{ item.name }</div>
        <div className='cell'>{ item.price }</div>
        <div className='cell'>
          <div className='counter'>
            <span onClick={() => { this.props.shareIncrementor(item) }}>+</span>
            <span>{ item.shares }</span>
            <span onClick={() => { this.props.shareDecerementor(item) }}>-</span>
          </div>
        </div>
        <div className='cell'>{ item.weightage }</div>
        <div className='cell'>
          <span onClick={() => { this.props.removePortfolioItem(item.id) }}>x</span>
        </div>
      </div>
    )
  }
}

export default TableItem
