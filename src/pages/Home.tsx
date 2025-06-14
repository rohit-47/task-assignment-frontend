import { useNavigate } from 'react-router-dom';
import '../styling/Home.css';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/tasks');
  }

  return (
    <div className="home-container">
      <h1>📘 Welcome to Weekly Note Keeper</h1>
      <p>Keep track of your daily notes organized by week.</p>
      <button className="navigate-button" onClick={handleClick}>
        View My Weekly Notes
      </button>
    </div>
  );
}

export default Home;
