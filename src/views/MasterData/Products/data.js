
import {formatNumeric} from '../../../utility/Utils'
// ** Table Server Side Column
export const serverSideColumns = [
    {
      name: 'Code',
      selector: 'code',
      sortable: true,
      minWidth: '100px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      minWidth: '350px'
    },
    {
      name: 'Cost',
      selector: 'cost',
      sortable: true,
      minWidth: '150px',
      right : true,
      cell: row => (
        <div className='text-right'>
          {formatNumeric(row.cost)}
        </div>
      )
    },
    {
      name: 'Price A',
      selector: 'price_unit_a_1',
      sortable: true,
      minWidth: '150px',
      right : true,
      cell: row => (
        <div className='text-right'>
          {formatNumeric(row.price_unit_a_1)}
        </div>
      )
    },
    {
      name: 'Price B',
      selector: 'price_unit_b_1',
      sortable: true,
      minWidth: '150px',
      right : true,
      cell: row => (
        <div className='text-right'>
          {formatNumeric(row.price_unit_b_1)}
        </div>
      )
    }
  ]