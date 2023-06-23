import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Transaction = () => {

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
        <tr>
          <td>Plus Plan</td>
          <td>July 09,2021 14:22</td>
          <td>₹1,725</td>
          <td>Ending in 3234</td>
          <td className='table-status'>Failed</td>
          <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>
        <tr>
          <td>Kerela food...</td>
          <td>July 08,2021 10:22</td>
          <td>₹4,925</td>
          <td>Ending in 5326</td>
          <td className='table-status'>Paid</td>
          <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>
        <tr>
          <td>Plus Plan</td>
          <td>July 09,2021 14:22</td>
          <td>₹1,725</td>
          <td>Ending in 3234</td>
          <td className='table-status'>Failed</td>
          <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>
        <tr>
          <td>Kerela food...</td>
          <td>July 08,2021 10:22</td>
          <td>₹4,925</td>
          <td>Ending in 5326</td>
          <td className='table-status'>Paid</td>
          <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>
        <tr>
          <td>Kerela food...</td>
          <td>July 08,2021 10:22</td>
          <td>₹4,925</td>
          <td>Ending in 5326</td>
          <td className='table-status'>Paid</td>
          <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
        </tr>
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
                <li><a href='#'>&#60; Back</a></li>
                <li><a href='#'>1</a></li>
                <li><a href='#'>2</a></li>
                <li><a href='#'>3</a></li>
                <li><a href='#'>4</a></li>
                <li><a href='#'>5</a></li>
                <li><a href='#'>6</a></li>
                <li><a href='#'>...</a></li>
                <li><a href="#">Next 	&#62;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Transaction;