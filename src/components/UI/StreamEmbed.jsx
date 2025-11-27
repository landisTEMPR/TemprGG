// Twitch iframe embed. Must include `parent` param with your domain in production.
export default function StreamEmbed({ channel = process.env.REACT_APP_TWITCH_CHANNEL || 'TEMPRESPORTS' }) {
  const parent = process.env.REACT_APP_TWITCH_PARENT || window.location.hostname;
  const src = `https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=false&autoplay=false`;
  return (
    <div className="embed-responsive">
      <iframe
        title="Twitch stream"
        src={src}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
      />
    </div>
  );
}
