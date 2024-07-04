import React, { useEffect, useState } from "react";
import "./Transactions.css"; // Assuming your existing CSS file is imported here
import { Pagination } from "antd";
import { format } from "date-fns"; // Importing date-fns for date formatting
import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;

  useEffect(() => {
    const accountHolderData = JSON.parse(localStorage.getItem("accountholder"));
    axios
      .get(`http://localhost:5000/users/getallusertransactions/${accountHolderData.Account_id}`)
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setTransactions([]); // Set transactions to empty array on error
      });
  }, []);

  // Calculate current transactions to display based on pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  // Handle page change
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Function to show transaction details modal
  const showTransactionDetails = (transaction) => {
    // Implement your modal opening logic here
    console.log("Show details for transaction:", transaction);
  };

  // Function to close modal
  const closeModal = () => {
    // Implement your modal closing logic here
    console.log("Close modal");
  };

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <table className="recent-transactions">
        <thead>
          <tr>
            <th>Tnx ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Amount</th>
            <th>Tnx Type</th>
            <th>Status</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>TNX****{transaction._id.slice(-4)}</td>
              <td>ZBKIN****{transaction.SenderAccountId.slice(-3)}</td>
              <td>ZBKIN****{transaction.ReceiverAccountId.slice(-3)}</td>
              <td>₹{transaction.Amount}</td>
              <td>{transaction.TransactionType}</td>
              <td className="transaction">
                <div className={transaction.Status === "Success" ? "dot-green" : "dot-red"}></div>
                {transaction.Status}
              </td>
              <td>{format(new Date(transaction.Date), "dd-MM-yyyy")}</td>
              <td>
                <button className="details-button" onClick={() => showTransactionDetails(transaction)}>
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination component */}
      <Pagination
        className="pagination"
        current={currentPage}
        pageSize={transactionsPerPage}
        total={transactions.length}
        onChange={handleChangePage}
      />

      {/* Modal for transaction details */}
      <div id="transactionModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal()}>&times;</span>
          <div className="transaction-details-modal">
            {/* Modal content will be populated here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
