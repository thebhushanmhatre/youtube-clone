import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import './Video.css';

export default function Video() {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  );
}
