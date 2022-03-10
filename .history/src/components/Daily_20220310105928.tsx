export const Daily = (props: any) => {
  const { report } = props;
  console.log(report);
  return(<></>);

  // return (
    // <div className="dayly">
    //   <div className="daylyd">
    //     {report.date}
    //     {report.dayOfWeekStr}
    //   </div>
    //   <div className="daylyi">
    //     <img
    //       src={`http://openweathermap.org/img/wn/${report.icon}@2x.png`}
    //       alt="icon"
    //       width={40}
    //     />
    //   </div>
    //   <div className="daylyde">{report.description}</div>
    //   <div className="daylym">
    //     {report.temp_max}/{report.temp_min}℃
    //   </div>
    // </div>
  // );
};
