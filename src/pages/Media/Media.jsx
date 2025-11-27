import VideoGrid from '../../components/UI/VideoGrid';

export default function Media() {
  const placeholder = [{ id: 'x', title: 'VOD placeholder', url: 'https://youtube.com', thumb: '/imgs/video-placeholder.png' }];
  return (
    <div>
      <section className="container">
        <h1>Media</h1>
        <VideoGrid videos={placeholder} />
      </section>
    </div>
  );
}