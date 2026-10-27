const LeagueInfo = ({
  title,
  desc,
  startDay,
  gameDay,
  scheduleImg,
  registerInfo,
}) => {
  return (
    <div className="px-16 py-4">
      <h2 className="font-bold uppercase">{title}</h2>
      <div className=" mt-2 mb-5 h-1 w-40 bg-starbuck" />
      <p>{desc}</p>
      {(startDay || gameDay) && (
        <>
          <p className="font-bold tracking-tight mt-3">DRAW TIMES</p>
          <ul className="list-disc pl-5">
            {startDay && <li>{startDay}</li>}
            {gameDay && <li>{gameDay}</li>}
          </ul>
        </>
      )}
      {scheduleImg && (
        <a href={scheduleImg} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-1 my-2 text-header-text-dark bg-starbuck rounded-3xl transition cursor-pointer">
            <p>View Schedule</p>
          </button>
        </a>
      )}
      {/*<h6 className="font-bold tracking-tight">REGISTER</h6>*/}
      {/*<p>For more information, contact the league rep:</p>*/}
      {/*<ul className="list-disc pl-5">*/}
      {/*  <li>{registerInfo}</li>*/}
      {/*</ul>*/}
    </div>
  );
};

export default LeagueInfo;
