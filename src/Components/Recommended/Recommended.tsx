import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

function Recommended() {
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

  const renderImgs = imgList.map((item, index) => (
    <Link
      key={String(index)}
      to={`${window.origin}/video/${index}`}
      className="side-video-list"
    >
      <img src={item} alt="" />
      <div className="video-info">
        <h4>Another recommendation - {index} video for you</h4>
        <p>GreatStack</p>
        <p>199k Views</p>
      </div>
    </Link>
  ));
  return <div className="recommended">{renderImgs}</div>;
}

export default Recommended;
