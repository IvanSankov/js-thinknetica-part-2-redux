import React from 'react';

export default function UndoRedo({ canUndo, canRedo, onUndo, onRedo }) {
  return (
    <div className="row">
      <div className="col-6">
        <button className="btn btn-primary" onClick={onUndo} disabled={!canUndo}>
          Undo
        </button>
      </div>
      <div className="col-6">
        <button className="btn btn-success" onClick={onRedo} disabled={!canRedo}>
          Redo
        </button>
      </div>
    </div>
  )
}