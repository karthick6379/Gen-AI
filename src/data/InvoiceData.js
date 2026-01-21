const invoices = [
  {
    invoiceId: "INV-001",
    supplierDetail: "XYZ Corp.",
    buyerDetail: "ABC Supplies Ltd.",
    month: "August",
    date: "01/08/2025",
    recievedTime: "12-03-2024",
    respondedTime: "12-03-2024",
    errorType: "Type 3",
    remedyIncidentNumber: "INC000091992723",
    snowTicketNumber: "CAS3324360",
    errorCommunicationType: "Vendor Fault",
    supplierName: "SCHUTZ GmbH & Co. KG",
    errorSummary: "Errors 0182354403_Faktura 0182354403 - invoice_ar_de@schuetz.net",
    errorDescription: `
      - Error(1): [rsm:CrossIndustryInvoice/.../Sequence] does not fulfil Minimum Cardinality 1. Found:0 (35)
      - Error(2): [ram:SpecifiedLineTradeAgreement] does not fulfil Minimum Cardinality 1. Found:0 (35)
    `,
    errorPattern: "Data Mismatch",
    routeCause: "Incorrect field",
    actionTaken: `
      • The tag ID inside SpecifiedTradeProduct field is wrong
      • Supplier needs to correct the field
      • Forwarded email to finops team
    `,
    permanentFix: "Vendor Training",
    ticketStatus: "Closed"
  },
  {
    invoiceId: "INV-002",
    supplierDetail: "Global Traders",
    buyerDetail: "Tech Solutions",
    month: "June",
    date: "01/08/2025",
    recievedTime: "14-04-2025",
    respondedTime: "14-04-2025",
    errorType: "Type 1",
    remedyIncidentNumber: "INC000091993962",
    snowTicketNumber: "CAS3324363",
    errorCommunicationType: "Vendor Fault",
    supplierName: "ABB AG - ELSE - Service Low Voltage",
    errorSummary: "Errors ABB_INVOICE_2960198433-0000000845490024.pdf - noreply.abb@crossnet.crossinx.com",
    errorDescription: `
      - The document has not been recognized as a valid PDF/A-3 Document with compliant XMP Metadata.
      - WARNING: The PDF does not contain any attachments. This is a pure PDF not related to Zugferd E-Invoicing process.
    `,
    errorPattern: "Invalid PDF/A-3 document",
    routeCause: "The document must comply with PDF/A-3 standard and include the XML file embedded.",
    actionTaken: `
      • XML missing from PDF attached
      • As per standard, an attachment should be included
      • Forwarded email to finops team to inform vendor
    `,
    permanentFix: "Vendor Training",
    ticketStatus: "Closed"
  },
  {
    invoiceId: "INV-003",
    supplierDetail: "ABC Sues Ltd.",
    buyerDetail: "XelaZ Corp.",
    month: "July",
    date: "31/07/2025",
    recievedTime: "17-12-2025",
    respondedTime: "17-12-2025",
    errorType: "Type 2",
    remedyIncidentNumber: "INC000091992734",
    snowTicketNumber: "CAS3326039",
    errorCommunicationType: "Vendor Fault",
    supplierName: "HACH LANGE GmbH",
    errorSummary: "Errors G000127435_G000127435.xml - accounts@hach.com",
    errorDescription: `
      - [BR-CO-10] Sum of Invoice line net amount (BT-106) = Σ Invoice line net amount (BT-131).
      - [BR-CO-13] Invoice total amount without VAT (BT-109) = Σ Invoice line net amount (BT-131) - allowances (BT-107) + charges (BT-108).
    `,
    errorPattern: "Data Mismatch",
    routeCause: "Mismatch of amount",
    actionTaken: `
      • As checked, there is mismatch in the amount
      • Forwarded email to finops team
    `,
    permanentFix: "Vendor Training",
    ticketStatus: "Closed"
  }
];

export default invoices;
