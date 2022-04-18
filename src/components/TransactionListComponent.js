import React from 'react'

export const TransactionList = () => {
  return (
    <>
    <h3>Transaction History</h3>
    <ul>
        <li>
            Cash<span>-$400</span><button className="delete-btn">x</button>
        </li>
    </ul>
    </>
  )
}
