import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/tasks');
  }

  return (
    <>
      This is Home Component
      <br/>
      <button onClick = {handleClick}> Go to Tasks </button>
    </>
  );
}

export default Home;