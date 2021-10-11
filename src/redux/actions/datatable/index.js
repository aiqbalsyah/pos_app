import axios from 'axios'

// ** Get table Data
export const getData = (params, uri) => {
  return async dispatch => {
    await axios.get(`http://api-pos.local/${uri}`, {params}).then(response => {
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.products,
        totalPages: response.data.totalPages
      })
    })
  }
}
