import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

export default function Sidebar({ sidebar }: any) {
  const categorySideLinks = {
    Home: home,
    Gaming: game_icon,
    Automobiles: automobiles,
    Sports: sports,
    Entertainment: entertainment,
    Tech: tech,
    Music: music,
    Blogs: blogs,
    News: news,
  };

  const renderCategories = Object.entries(categorySideLinks).map(
    ([title, srcLink], index) => {
      return (
        <div key={String(index)} className="side-link">
          <img src={srcLink} alt="" />
          <p>{title}</p>
        </div>
      );
    }
  );

  const subscribersSideLinks = {
    Megan: megan,
    Jack: jack,
    Simon: simon,
    Tom: tom,
    Cameron: cameron,
  };

  const renderSubscribers = Object.entries(subscribersSideLinks).map(
    ([title, srcLink], index) => {
      return (
        <div key={String(index)} className="side-link">
          <img src={srcLink} alt="" />
          <p>{title}</p>
        </div>
      );
    }
  );

  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        {renderCategories}
        <hr />
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          {renderSubscribers}
        </div>
      </div>
    </div>
  );
}
