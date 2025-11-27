import matches from '../../data/matches.json';
import MatchCard from '../../components/UI/MatchCard';

export default function Schedule() {
  return (
    <div className="container">
      <h1>Schedule</h1>
      <div className="matches">
        {matches.map(m => <MatchCard match={m} key={m.id} />)}
      </div>
    </div>
  );
}
