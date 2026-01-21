import React from 'react';
import './Invoices.css';
import invoices from '../../data/InvoiceData';

const Invoices = () => {
  return (
    <div className="invoices-container">
      <div className="table-responsive">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Supplier Detail</th>
              <th>Buyer Detail</th>
              <th>Month</th>
              <th>Date</th>
              <th>Recieved Time</th>
              <th>Responded Time</th>
              <th>Error Type</th>
              <th>Remedy Incident Number</th>
              <th>Snow Ticket Number</th>
              <th>Error Communication Type</th>
              <th>Supplier Name</th>
              <th>Error Summary</th>
              <th>Error Description</th>
              <th>Error Pattern</th>
              <th>Route Cause</th>
              <th>Action Taken</th>
              <th>Permanent Fix</th>
              <th>Ticket Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.supplierDetail}</td>
                <td>{invoice.buyerDetail}</td>
                <td>{invoice.month}</td>
                <td>{invoice.date}</td>
                <td>{invoice.recievedTime}</td>
                <td>{invoice.respondedTime}</td>
                <td>{invoice.errorType}</td>
                <td>{invoice.remedyIncidentNumber}</td>
                <td>{invoice.snowTicketNumber}</td>
                <td>{invoice.errorCommunicationType}</td>
                <td>{invoice.supplierName}</td>
                <td>{invoice.errorSummary}</td>
                <td>{invoice.errorDescription}</td>
                <td>{invoice.errorPattern}</td>
                <td>{invoice.routeCause}</td>
                <td>{invoice.actionTaken}</td>
                <td>{invoice.permanentFix}</td>
                <td>{invoice.ticketStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
