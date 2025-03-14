import React from 'react'

const CustomerView = ({customers}) => {
  return (
    <div>
         <h3>Customer List</h3>
         <ul>
          {
          customers.map((customer) =><li>{customer}</li> )
          }
         </ul>
    </div>
  )
}

export default CustomerView;