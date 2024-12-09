import React, { useState } from "react";
import { FaDownload, FaPrint, FaFilter, FaFileInvoiceDollar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Financials_T = ({ teacherId }) => {
  const [showPayslipModal, setShowPayslipModal] = useState(false);
  const [selectedData, setSelectedData] = useState('overview');

  const financialData = [
    {
      teacherId: 1,
      personalInfo: {
        name: "John Doe",
        employeeId: "TCH001",
        department: "Mathematics",
        bankAccount: "XXXX-XXXX-1234",
        designation: "Senior Teacher"
      },
      payslip: [
        {
          month: "January",
          year: 2024,
          basicSalary: 3000,
          allowances: {
            houseRent: 500,
            transport: 200,
            medical: 300
          },
          deductions: {
            tax: 250,
            providentFund: 150,
            insurance: 100
          },
          overtime: 200,
          netSalary: 3700,
          paymentDate: "2024-01-31"
        },
        {
          month: "February",
          year: 2024,
          basicSalary: 3000,
          allowances: {
            houseRent: 500,
            transport: 200,
            medical: 300
          },
          deductions: {
            tax: 250,
            providentFund: 150,
            insurance: 100
          },
          overtime: 400,
          netSalary: 3900,
          paymentDate: "2024-02-28"
        }
      ],
      incentives: [
        {
          reason: "Performance Bonus",
          amount: 500,
          date: "2024-01-15",
          description: "Outstanding contribution in academic results"
        },
        {
          reason: "Special Achievement",
          amount: 300,
          date: "2024-02-10",
          description: "Winner of Best Teacher Award"
        }
      ],
      yearlyStats: {
        totalEarnings: 42000,
        totalDeductions: 6000,
        totalIncentives: 2400,
        leaveBalance: 12
      }
    }
    // Add more teachers as needed
  ];

  const teacherFinancials = financialData.find(data => data.teacherId === teacherId);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 min-h-screen"
      initial="hidden"
      animate="visible"
    >
      {teacherFinancials ? (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Financial Dashboard</h6>
          </div>
          <div className="card-body">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-4">{selectedData.charAt(0).toUpperCase() + selectedData.slice(1)} Data</h3>

              {/* Navigation for selecting data */}
              <div className="mb-4">
                {['overview', 'payslips', 'incentives', 'deductions'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedData(tab)}
                    className={`mr-2 px-4 py-2 rounded-lg ${
                      selectedData === tab ? 'bg-info text-white' : 'bg-info text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                <motion.div
                  key={selectedData}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedData === 'overview' && (
                    <div>
                      <p>Total Earnings: ${teacherFinancials.yearlyStats.totalEarnings}</p>
                      <p>Total Deductions: ${teacherFinancials.yearlyStats.totalDeductions}</p>
                      <p>Total Incentives: ${teacherFinancials.yearlyStats.totalIncentives}</p>
                      <p>Leave Balance: {teacherFinancials.yearlyStats.leaveBalance} days</p>
                    </div>
                  )}
                  {selectedData === 'payslips' && (
                    <div>
                      {teacherFinancials.payslip.map((slip, index) => (
                        <div key={index} className="mb-2">
                          <h4 className="font-semibold">{slip.month} {slip.year}</h4>
                          <p>Net Salary: ${slip.netSalary}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedData === 'incentives' && (
                    <div>
                      {teacherFinancials.incentives.map((incentive, index) => (
                        <div key={index} className="mb-2">
                          <h4 className="font-semibold">{incentive.reason} - ${incentive.amount}</h4>
                          <p>{incentive.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedData === 'deductions' && (
                    <div>
                      {teacherFinancials.payslip.map((slip, index) => (
                        <div key={index} className="mb-2">
                          <h4 className="font-semibold">{slip.month} {slip.year}</h4>
                          <p>Deductions: ${Object.values(slip.deductions).reduce((a, b) => a + b, 0)}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Buttons at the bottom */}
            <div className="mt-4 flex justify-between">
              <button onClick={handlePrint} className="btn btn-info btn-user btn-block px-4 py-2 rounded-lg  transition-colors">
                <FaPrint /> Print
              </button>
              <button onClick={() => setShowPayslipModal(true)} className=" btn btn-info btn-user btn-block px-4 py-2 rounded-lg  transition-colors">
                <FaDownload /> Download Payslip
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div className="text-center py-16">
          <FaFileInvoiceDollar className="mx-auto text-6xl text-gray-400 mb-4" />
          <p className="text-xl text-gray-600">No financial information found for this teacher.</p>
        </motion.div>
      )}

      {/* Payslip Modal */}
      <AnimatePresence>
        {showPayslipModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            {/* Add your modal content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Financials_T;