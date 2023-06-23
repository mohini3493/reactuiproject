import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Transaction = () => {

  const data = [
    {
      id: 1,
      course: "Plus Plan",
      date: "July 09,2021 14:22",
      amount: "₹1,725",
      payment: "Ending in 3234",
      status: "Failed"
    },
    {
      id: 2,
      course: "Kerela food..",
      date: "July 08,2021 10:22",
      amount: "₹4,925",
      payment: "Ending in 5326",
      status: "Paid"
    },
    {
      id: 3,
      course: "Plus Plan",
      date: "July 09,2021 14:22",
      amount: "₹1,725",
      payment: "Ending in 3234",
      status: "Failed"
    },
    {
      id: 4,
      course: "Kerela food..",
      date: "July 08,2021 10:22",
      amount: "₹4,925",
      payment: "Ending in 5326",
      status: "Paid"
    },
    {
      id: 5,
      course: "Kerela food..",
      date: "July 08,2021 10:22",
      amount: "₹4,925",
      payment: "Ending in 5326",
      status: "Paid"
    }
  ]

  const details = data.map(d => {
    return (
      <tr>
        <td>{d.course}</td>
        <td>{d.date}</td>
        <td>{d.amount}</td>
        <td>{d.payment}</td>
        <td className='table-status'>{d.status}</td>
        <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
      </tr>
    )
  })
  const purchase = [
    <div className='transactions'>
      <table>
        <tr>
          <th>Subscription/Course</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Method</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {details}
      </table>
    </div>
  ]

  return (
    <div>
      <div>
        <h3>Transaction History</h3>
        <p>The transaction remarks are displayed.</p>
      </div>
      <div className='transaction-container'>
        <div className='transaction-history'>
          <h3>Recent Purchase</h3>
          {purchase}
          <div className='transaction-pagination'>
            <p>Showing 10 items cut of 250 results found</p>
            <div>
              <ul className='pagination-ul'>
                <li><Link to='#'>&#60; Back</Link></li>
                <li><Link to='#'>1</Link></li>
                <li><Link to='#'>2</Link></li>
                <li><Link to='#'>3</Link></li>
                <li><Link to='#'>4</Link></li>
                <li><Link to='#'>5</Link></li>
                <li><Link to='#'>6</Link></li>
                <li><Link to='#'>...</Link></li>
                <li><Link to="#">Next 	&#62;</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Transaction;