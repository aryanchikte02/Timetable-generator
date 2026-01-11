const TimetableGrid = ({ activities, days, times }) => {
  return (
    <div className="tt-table-wrapper">
      <table className="tt-table">
        <thead>
          <tr>
            <th className="tt-th">Time</th>
            {days.map((d) => (
              <th className="tt-th" key={d}>{d}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="tt-time">{time}</td>

              {days.map((day) => {
                const activity = activities.find(
                  (a) => a.day === day && a.time === time
                );

                return (
                  <td className="tt-td" key={day}>
                    {activity && (
                      <div
                        className="tt-activity"
                        style={{ background: activity.color }}
                      >
                        <div className="tt-subject">{activity.subject}</div>
                        <div className="tt-meta">
                          {activity.teacher} | {activity.classroom}
                        </div>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableGrid;
