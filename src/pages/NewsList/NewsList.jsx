import news from '../../data/news.json';
import { Link } from 'react-router-dom';

export default function NewsList() {
  return (
    <div className="container">
      <h1>News</h1>
      <ul className="news-list">
        {news.map(n => (
          <li key={n.id}>
            <Link to={`/news/${n.slug}`}>{n.title}</Link>
            <div className="meta">{new Date(n.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
