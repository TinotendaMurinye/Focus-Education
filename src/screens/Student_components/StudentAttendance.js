import React from 'react';
import moment from 'moment';

const StudentAttendance = () => {
    // Generate the last 30 days
    const days = Array.from({ length: 30 }, (_, i) => moment().subtract(i, 'days'));
    
    // Example attendance data for the last 30 days (true for present, false for absent)
    const attendanceData = days.map((day) => ({
        date: day.format('YYYY-MM-DD'),
        present: Math.random() > 0.5 // Randomly assigning attendance for demonstration
    }));

    // Group days by week (Monday to Sunday)
    const weeks = [];
    let currentWeek = [];

    for (const day of attendanceData) {
        const dayOfWeek = moment(day.date).day(); // 0 (Sunday) to 6 (Saturday)
        if (dayOfWeek === 1 && currentWeek.length) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        currentWeek.push(day);
    }
    if (currentWeek.length) weeks.push(currentWeek); // Add the last week

    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Attendance Calendar</h6>
                <h6 className="m-0">Student: John Doe</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%">
                        <thead>
                            <tr>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weeks.map((week, weekIndex) => (
                                <tr key={weekIndex}>
                                    {week.map((day, dayIndex) => (
                                        <td
                                            key={dayIndex}
                                            style={{
                                                textAlign: 'center',
                                                backgroundColor: 'white', // Set background to white
                                                color: 'black' // Change text color to black for visibility
                                            }}
                                        >
                                            <div>{moment(day.date).format('DD')}</div>
                                            <div style={{ position: 'relative', marginTop: '5px' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    width: '20px',
                                                    height: '20px',
                                                    borderRadius: '50%',
                                                    backgroundColor: day.present ? 'green' : 'red',
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    lineHeight: '20px',
                                                    position: 'relative', // Change to relative
                                                    margin: '0 auto' // Center the badge horizontally
                                                }}>
                                                    {day.present ? '✓' : '✗'}
                                                </span>
                                            </div>
                                        </td>
                                    ))}
                                    {Array.from({ length: 7 - week.length }).map((_, extraIndex) => (
                                        <td key={extraIndex}></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;