// Simple grid. Pass `videos` = [{id, title, thumb, url}]
export default function VideoGrid({ videos = [] }) {
  return (
    <section className="video-grid container">
      {videos.length === 0 && <p>No videos yet.</p>}
      <div className="grid">
        {videos.map(v => (
          <a className="video-card" key={v.id} href={v.url} target="_blank" rel="noreferrer">
            <img src={v.thumb} alt={v.title} />
            <div className="video-title">{v.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
