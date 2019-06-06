import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewGrocery } from '../modules/groceries'

import GroceryListContainer from './GroceryListContainer'
import GroceryFormContainer from './GroceryFormContainer'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Grocery List Redux</h1>
        <GroceryFormContainer />
        <GroceryListContainer
          groceries={this.props.groceryList}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}

export default connect (
  mapStateToProps,
  null
)(GroceryPageContainer)
