'use client'

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

export default function CursorAdvancedMarkdownTodosPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Welcome to the Note-taking App",
      content: "This is a simple note-taking app with Markdown support. You can:\n\n- Add new notes\n- Delete existing notes\n- Search through your notes\n\nEnjoy using the app!",
      createdAt: new Date()
    },
    {
      id: 2,
      title: "Markdown Example",
      content: "Here's a quick Markdown example:\n\n# Heading 1\n## Heading 2\n\n- List item 1\n- List item 2\n\n**Bold text** and *italic text*\n\n[Link to Google](https://www.google.com)",
      createdAt: new Date()
    }
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newNote: Note = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date(),
      };
      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (note: Note) => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const cancelEditing = () => {
    setEditingNoteId(null);
    setEditTitle('');
    setEditContent('');
  };

  const saveEdit = () => {
    if (editingNoteId && editTitle.trim() && editContent.trim()) {
      setNotes(notes.map(note => 
        note.id === editingNoteId 
          ? { ...note, title: editTitle.trim(), content: editContent.trim() }
          : note
      ));
      cancelEditing();
    }
  };

  // This code filters the notes based on the search query
  // It creates a new array 'filteredNotes' containing only the notes that match the search criteria
  const filteredNotes = notes.filter(note =>
    // Check if the note's title (converted to lowercase) includes the search query (also lowercase)
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // OR if the note's content (converted to lowercase) includes the search query (also lowercase)
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // The use of toLowerCase() ensures case-insensitive searching
  // The includes() method checks if the search query is a substring of the title or content

  return (
    <div className="container mx-auto p-4 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-300">Note-taking App</h1>
      
      <form onSubmit={addNote} className="mb-4">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
        />
        <textarea
          placeholder="Note content (Markdown supported)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
          rows={4}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Note
        </button>
      </form>

      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-700 rounded bg-gray-800 text-gray-100 placeholder-gray-400"
      />

      <div className="space-y-4">
        {filteredNotes.map(note => (
          <div key={note.id} className="border border-gray-700 p-4 rounded bg-gray-800 shadow-md">
            {editingNoteId === note.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-700 rounded bg-gray-800 text-gray-100"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-700 rounded bg-gray-800 text-gray-100"
                  rows={4}
                />
                <button
                  onClick={saveEdit}
                  className="bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  className="bg-gray-600 text-white px-2 py-1 rounded text-sm hover:bg-gray-700"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-2 text-blue-300">{note.title}</h2>
                <ReactMarkdown className="prose prose-invert max-w-none text-gray-300">{note.content}</ReactMarkdown>
                <div className="mt-2 text-sm text-gray-400">
                  Created: {note.createdAt.toLocaleString()}
                </div>
                <button
                  onClick={() => startEditing(note)}
                  className="mt-2 bg-yellow-600 text-white px-2 py-1 rounded text-sm hover:bg-yellow-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="mt-2 bg-red-600 text-white px-2 py-1 rounded text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}