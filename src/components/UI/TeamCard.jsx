import { Link } from 'react-router-dom';

export default function TeamCard({ team }) {
  return (
    <article className="team-card">
      <img src={team.logo} alt={team.name} className="team-logo" />
      <h3>{team.name}</h3>
      <div className="team-meta">{team.game}</div>
      <Link to={`/teams/${team.id}`} className="btn">View roster</Link>
    </article>
  );
}
