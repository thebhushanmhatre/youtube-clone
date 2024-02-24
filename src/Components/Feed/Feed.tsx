import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

export default function Feed() {
  const imgList = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
  ];

  const renderImgs = [...imgList, ...imgList, ...imgList].map(
    (imgSrc, index) => {
      if (index === 0) {
        return (
          <Link to={`video/20/4321`} className="card">
            <img src={imgSrc} alt="" />
            <h2>
              Best channel to learn coding that help yout to be a web developer
            </h2>
          </Link>
        );
      }
      return (
        <div id={String(index)} className="card">
          <img src={imgSrc} alt="" />
          <h2>
            Best channel to learn coding that help yout to be a web developer
          </h2>
        </div>
      );
    }
  );

  return <div className="feed">{renderImgs}</div>;
}
