import { useNavigate } from 'react-router-dom';

function Tasks() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <>
      This is Task Component
      <br/>
      <button onClick={handleClick}> Go to Home </button>
    </>
  );
}

export default Tasks;