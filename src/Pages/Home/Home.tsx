import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css';

export default function Home({ sidebar }: any) {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <Feed />
      </div>
    </>
  );
}
