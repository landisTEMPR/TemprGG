export default function MatchCard({ match }) {
  const date = new Date(match.datetime).toLocaleString();
  return (
    <div className="match-card">
      <div className="match-teams">{match.teamA} vs {match.teamB}</div>
      <div className="match-meta">{date}</div>
      {match.result && <div className="match-result">Result: {match.result}</div>}
    </div>
  );
}
