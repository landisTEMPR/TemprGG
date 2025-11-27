import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import NewsList from './pages/NewsList/NewsList';
import NewsPost from './pages/NewsPost/NewsPost';
import Teams from './pages/Teams/Teams';
import TeamPage from './pages/TeamPage/TeamPage';
import Schedule from './pages/Schedule/Schedule';
import Media from './pages/Media/Media';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Sponsors from './pages/Sponsors/Sponsors';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsList />} />
        <Route path="news/:slug" element={<NewsPost />} />
        <Route path="teams" element={<Teams />} />
        <Route path="teams/:teamId" element={<TeamPage />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="media" element={<Media />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}