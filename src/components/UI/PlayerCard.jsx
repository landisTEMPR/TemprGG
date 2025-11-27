export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      {player.headshot && <img src={player.headshot} alt={player.tag} />}
      <div className="player-info">
        <h4>{player.tag}</h4>
        <div className="player-role">{player.role}</div>
      </div>
    </div>
  );
}
