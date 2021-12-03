import React from 'react';
import '../pages/routing.task.scss';
import {useState, useReducer} from 'react';
import {v4 as uuid} from 'uuid';

const initialNoteState = {
    lastNoteCreated: '',
    totalNotes: 0,
    notes: [],
};

const notesReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            const newState = {
                lastNoteCreated: new Date().toLocaleTimeString(),
                totalNotes: prevState.notes.length + 1,
                notes: [...prevState.notes, action.payload],
            };

            return newState;
        }
        case 'DELETE_NOTE': {
            const newState = {
                ...prevState,
                totalNotes: prevState.notes.length - 1,
                notes: prevState.notes.filter((note: any) => note.id !== action.payload.id),
            };
            return newState;
        }
    }
};
const RoutingTaskPage = () => {
    const [noteInput, setNoteInput] = useState('');
    const [notesState, dispatch] = useReducer(notesReducer, initialNoteState);

    const addNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!noteInput) {
            return;
        }
        const newNote = {
            id: uuid(),
            text: noteInput,
            rotate: Math.floor(Math.random() * 15),
        };
        dispatch({type: 'ADD_NOTE', payload: newNote});
        setNoteInput('');
    };

    const dropNote = (event: any) => {
        event.target.style.left = `${event.pageX - 50}px`;
        event.target.style.top = `${event.pageY - 50}px`;
    };

    const dragOver = (event: React.FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <div className="app" onDragOver={dragOver}>
            <form onSubmit={addNote} className="note-form">
                <textarea
                    value={noteInput}
                    onChange={(event) => setNoteInput(event.target.value)}
                    placeholder="Create a new note..."></textarea>
                <button>Add</button>
            </form>
            {notesState?.notes.map((note: any) => (
                <div
                    className="note"
                    draggable="true"
                    onDragEnd={dropNote}
                    style={{transform: `rotate(${note.rotate}deg)`}}
                    key={note.id}>
                    <div
                        onClick={() => dispatch({type: 'DELETE_NOTE', payload: note})}
                        className="close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <pre className="text">{note.text}</pre>
                </div>
            ))}
        </div>
    );
};

export default RoutingTaskPage;
