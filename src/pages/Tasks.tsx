import { useNavigate } from 'react-router-dom';
import WeekSelector from '../components/WeekSelector.tsx';
import NoteTable from '../components/NoteTable.tsx';
import FooterSummary from '../components/FooterSummary.tsx';
import '../styling/Tasks.css';

function Tasks() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className="tasks-container">
      <WeekSelector />
      <NoteTable />
      <FooterSummary />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="navigate-button" onClick={handleClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Tasks;