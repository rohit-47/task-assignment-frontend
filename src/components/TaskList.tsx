import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from './TaskService';

interface Task {
  id: number;
  title: string;
  description: string;
  assignedBy: string;
  assignedTo: string;
  createdAt: string;
}

interface Props {
  onSelect: (task: Task) => void;
  onEdit: (task: Task) => void;
}

const TaskList: React.FC<Props> = ({ onSelect, onEdit }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks()
      .then(setTasks)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Delete this task?')) return;
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="task-table-responsive">
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned By</th>
            <th>Assigned To</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.assignedBy}</td>
              <td>{task.assignedTo}</td>
              <td>{new Date(task.createdAt).toLocaleString()}</td>
              <td className="task-actions">
                <button className="fancy-btn view-btn" onClick={() => onSelect(task)}>View</button>
                <button className="fancy-btn edit-btn" onClick={() => navigate(`/tasks/update/${task.id}`)}>Edit</button>
                <button className="fancy-btn delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
