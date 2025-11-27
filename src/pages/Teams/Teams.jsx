import teams from '../../data/teams.json';
import TeamCard from '../../components/UI/TeamCard';

export default function Teams() {
  return (
    <div className="container">
      <h1>Teams</h1>
      <div className="team-grid">
        {teams.map(t => <TeamCard team={t} key={t.id} />)}
      </div>
    </div>
  );
}
