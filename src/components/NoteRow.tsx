import React from 'react';
import DayEntryInput from './DayEntryInput.tsx';

interface NoteRowProps {
  note: {
    category: string;
    content: string;
  };
}

function NoteRow({ note }: NoteRowProps) {
  return (
    <div className="note-row">
      <div className="note-category">{note.category}</div>
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ display: 'inline-block' }}>
          <DayEntryInput placeholder={note.content} />
        </div>
      ))}
    </div>
  );
}

export default NoteRow;
