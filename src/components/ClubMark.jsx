import heroLogo from "../assets/logos/starbuck_5.png";

export function ClubMark({ compact = false }) {
  return (
    <div
      className={`club-mark ${compact ? "club-mark--compact" : ""}`}
      aria-label="Starbuck Curling Club"
    >
      <img src={heroLogo} alt="Hero Logo" className={`club-mark-logo ${compact ? "club-mark-logo--compact" : ""}`} /> 
      <div>
        <span>Starbuck</span>
        <strong>Curling Club</strong>
      </div>
    </div>
  );
}
