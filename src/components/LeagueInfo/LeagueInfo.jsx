const LeagueInfo = ({name, desc, startDay, gameDay, scheduleImg, registerInfo}) => {

  return (
    <div className="mx-auto max-w-7xl px-12 py-5">
      <h1 className="font-bold uppercase">{name}</h1>
      <p>{desc}</p>
      <h2 className="font-bold tracking-tight">DRAW TIMES</h2>
      <ul className="list-disc pl-5">
        <li>{startDay}</li>
        <li>{gameDay}</li>
      </ul>
      <a href={scheduleImg} target="_blank" rel="noopener noreferrer">
        <button className="px-8 py-2 text-header-text-dark bg-starbuck rounded-3xl transition cursor-pointer">
          Schedule
        </button>
      </a>
      <h2 className="font-bold tracking-tight">REGISTER</h2>
      <p>For more infromation, contact the league rep:</p>
      <ul className="list-disc pl-5">
        <li>{registerInfo}</li>
      </ul>
    </div>
  );
}

export default LeagueInfo;