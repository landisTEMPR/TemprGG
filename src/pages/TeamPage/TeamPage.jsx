import { useParams } from 'react-router-dom';
import teams from '../../data/teams.json';
import PlayerCard from '../../components/UI/PlayerCard';

export default function TeamPage() {
  const { teamId } = useParams();
  const team = teams.find(t => t.id === teamId);
  if (!team) return <div className="container"><h1>Team not found</h1></div>;

  return (
    <div className="container">
      <h1>{team.name}</h1>
      <div className="team-meta">{team.game}</div>
      <div className="roster-grid">
        {team.roster.map((p, i) => <PlayerCard player={p} key={i} />)}
      </div>
    </div>
  );
}
