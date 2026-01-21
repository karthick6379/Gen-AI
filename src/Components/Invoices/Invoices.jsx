import React, { useState } from 'react';
import './Invoices.css';
import invoices from '../../data/InvoiceData';

const Invoices = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  return (
    <div className="invoices-container">
      <div className="table-responsive">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Month</th>
              <th>Recieved Time</th>
              <th>Responded Time</th>
              <th>Remedy Incident Number</th>
              <th>Snow Ticket Number</th>
              <th>Supplier Name</th>
              <th>Ticket Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <React.Fragment key={index}>
                <tr className={expandedRow === index ? 'expanded-row' : ''}>
                  <td>{invoice.invoiceId}</td>
                  <td>{invoice.month}</td>
                  <td>{invoice.recievedTime}</td>
                  <td>{invoice.respondedTime}</td>
                  <td>{invoice.remedyIncidentNumber}</td>
                  <td>{invoice.snowTicketNumber}</td>
                  <td>{invoice.supplierName}</td>
                  <td>
                    <div className="status-cell">
                      <span className={`status-badge status-${invoice.ticketStatus.toLowerCase()}`}>
                        {invoice.ticketStatus}
                      </span>
                      <button
                        type="button"
                        className="expand-toggle"
                        onClick={() =>
                          setExpandedRow(expandedRow === index ? null : index)
                        }
                      >
                        {expandedRow === index ? 'Hide details' : 'Know more'}
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === index && (
                  <tr className="details-row">
                    <td colSpan={8}>
                      <div className="details-card">
                        <h4 className="details-title">More details</h4>
                        <div className="details-grid">
                          <div className="details-item">
                            <span className="details-label">Error type</span>
                            <span className="details-value">{invoice.errorType}</span>
                          </div>
                          <div className="details-item">
                            <span className="details-label">Error communication type</span>
                            <span className="details-value">{invoice.errorCommunicationType}</span>
                          </div>
                          <div className="details-item">
                            <span className="details-label">Error summary</span>
                            <span className="details-value">{invoice.errorSummary}</span>
                          </div>
                          <div className="details-item details-item-full">
                            <span className="details-label">Error description</span>
                            <span className="details-value">{invoice.errorDescription}</span>
                          </div>
                          <div className="details-item">
                            <span className="details-label">Error pattern</span>
                            <span className="details-value">{invoice.errorPattern}</span>
                          </div>
                          <div className="details-item">
                            <span className="details-label">Route cause</span>
                            <span className="details-value">{invoice.routeCause}</span>
                          </div>
                          <div className="details-item details-item-full">
                            <span className="details-label">Action taken</span>
                            <span className="details-value">{invoice.actionTaken}</span>
                          </div>
                          <div className="details-item">
                            <span className="details-label">Permanent fix</span>
                            <span className="details-value">{invoice.permanentFix}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
