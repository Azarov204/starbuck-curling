const LeagueInfo = ({name, desc, startDay, gameDay, scheduleImg, registerInfo}) => {

  return (
    <div className="mx-auto max-w-7xl px-12 py-4">
      <h4 className="font-bold uppercase">{name}</h4>
      <p>{desc}</p>
      <h6 className="font-bold tracking-tight mt-3">DRAW TIMES</h6>
      <ul className="list-disc pl-5">
        <li>{startDay}</li>
        <li>{gameDay}</li>
      </ul>
      <a href={scheduleImg} target="_blank" rel="noopener noreferrer">
        <button className="px-8 py-2 my-3 text-header-text-dark bg-starbuck rounded-3xl transition cursor-pointer">
          Schedule
        </button>
      </a>
      {/*<h6 className="font-bold tracking-tight">REGISTER</h6>*/}
      {/*<p>For more information, contact the league rep:</p>*/}
      {/*<ul className="list-disc pl-5">*/}
      {/*  <li>{registerInfo}</li>*/}
      {/*</ul>*/}
    </div>
  );
}

export default LeagueInfo;