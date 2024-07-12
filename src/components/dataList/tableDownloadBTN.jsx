import React from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableDownloadButton = ({ data }) => {
  const time = new Date();

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.autoTable({
        head: [['ID', 'Full Name', 'Email Address', 'Phone Number', 'Message']],
        body: data.map(item => [item.id, item.name, item.email, item.phoneNumber, item.message])
      });
      doc.save(`dataSetTable-${time}.pdf`);
      toast.success('PDF downloaded successfully');
    } catch (error) {
      toast.error('Failed to download PDF');
      console.error('Error exporting to PDF:', error);
    }
  };

  const exportToExcel = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(data.map(item => ({
        ID: item.id,
        'Full Name': item.name,
        'Email Address': item.email,
        'Phone Number': item.phoneNumber,
        Message: item.message,
      })));
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
      XLSX.writeFile(workbook, `dataSetTable-${time}.xlsx`);
      toast.success('Excel downloaded successfully');
    } catch (error) {
      toast.error('Failed to download Excel');
      console.error('Error exporting to Excel:', error);
    }
  };

  return (
    <div className="relative inline-block group">
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download Data
      </button>
      <div className={`absolute  w-full text-black bg-white shadow-lg rounded overflow-hidden hidden group-hover:block`}>
        <ul className="text-sm list-none p-0 m-0">
          <li className="p-2 hover:bg-gray-200 cursor-pointer transition-all duration-300r" onClick={exportToExcel}>
            Download Excel
          </li>
          <hr className='w-11/12 mx-auto text-slate-500/60'/>
          <li className="p-2 hover:bg-gray-200 cursor-pointer transition-all duration-300" onClick={exportToPDF}>
            Download PDF
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableDownloadButton;
