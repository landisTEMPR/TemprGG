import { useParams } from 'react-router-dom';
import news from '../../data/news.json';

export default function NewsPost() {
  const { slug } = useParams();
  const article = news.find(n => n.slug === slug);
  if (!article) return <div className="container"><h1>Not found</h1></div>;

  return (
    <article className="container news-post">
      <h1>{article.title}</h1>
      <div className="meta">{new Date(article.date).toLocaleString()}</div>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </article>
  );
}
