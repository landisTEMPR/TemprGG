export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} TEMPR.GG</div>
        <div className="footer-links">
          <a href="https://twitter.com/temprgg" target="_blank" rel="noreferrer">X</a>
          <a href="https://twitch.tv/temprgg" target="_blank" rel="noreferrer">Twitch</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
