// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import dataTables from './datatable'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  dataTables
})

export default rootReducer
