import React from "react";

const Results_T = ({ teacherId }) => {
  // Hardcoded pass rates data linked with teacher IDs
  const passRateData = [
    {
      teacherId: 1,
      termPassRates: [
        { term: "Term 1", passRate: 80 },
        { term: "Term 2", passRate: 85 },
        { term: "Term 3", passRate: 90 },
      ],
      zimsecPassRate: 88,
    },
    {
      teacherId: 2,
      termPassRates: [
        { term: "Term 1", passRate: 75 },
        { term: "Term 2", passRate: 80 },
        { term: "Term 3", passRate: 70 },
      ],
      zimsecPassRate: 78,
    },
  ];

  // Filter pass rate data based on teacherId
  const teacherPassRates = passRateData.find(data => data.teacherId === teacherId);

  // Function to determine color based on pass rate value
  const getColor = (value) => {
    if (value >= 75) return "primary"; // Excellent
    if (value >= 60) return "warning"; // Good
    if (value >= 50) return "success"; // Average
    return "danger"; // Poor
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Teacher Pass Rates</h6>
      </div>
      <div className="card-body">
        {teacherPassRates ? (
          <>
            <h5>Term Pass Rates</h5>
            {teacherPassRates.termPassRates.map((item, index) => (
              <div key={index} className="mb-3">
                <p>{item.term} Pass Rate: {item.passRate}%</p>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${getColor(item.passRate)}`}
                    role="progressbar"
                    style={{ width: `${item.passRate}%` }}
                    aria-valuenow={item.passRate}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {item.passRate}%
                  </div>
                </div>
              </div>
            ))}
            <h5>ZIMSEC Annual Pass Rate</h5>
            <p>{teacherPassRates.zimsecPassRate}%</p>
            <div className="progress mb-3">
              <div
                className={`progress-bar bg-${getColor(teacherPassRates.zimsecPassRate)}`}
                role="progressbar"
                style={{ width: `${teacherPassRates.zimsecPassRate}%` }}
                aria-valuenow={teacherPassRates.zimsecPassRate}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {teacherPassRates.zimsecPassRate}%
              </div>
            </div>
          </>
        ) : (
          <p>No pass rate information found for this teacher.</p>
        )}
      </div>
    </div>
  );
};

export default Results_T;