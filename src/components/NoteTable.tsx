import React from 'react';
import NoteRow from './NoteRow.tsx';
import '../styling/NoteTable.css';

function NoteTable() {
  const notes = [
    { category: 'Planning', content: 'Requirement review and meeting notes' },
    { category: 'Development', content: 'Bug fixes and module work' },
    { category: 'Learning', content: 'Read React Testing Library docs' },
  ];

  return (
    <div className="note-table">
      <div className="note-header">
        <div>Category</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
      </div>
      
      {notes.map((note, idx) => (
        <div key={idx}>
          <NoteRow note={note} />
        </div>
      ))}
    </div>
  );
}

export default NoteTable;
