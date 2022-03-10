export const Daily = (props) => {

  const {report}

  return (
    <div className="dayly">
      <div className="daylyd">
        {date(report.dt)}
        {dayOfWeekStr(report.dt)}
      </div>
      <div className="daylyi">
        <img
          src={`http://openweathermap.org/img/wn/${report.weather[0].icon}@2x.png`}
          alt="icon"
          width={40}
        />
      </div>
      <div className="daylyde">{report.weather[0].description}</div>
      <div className="daylym">
        {report.temp.max}/{report.temp.min}℃
      </div>
    </div>
  );
};
