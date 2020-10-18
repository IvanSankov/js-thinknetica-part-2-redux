import React, { useCallback } from "react";

function Filter({ showAll, showCompleted, showNotCompleted }) {
  return (
    <div className="row">
      <h3>Фильтр</h3>
      <div className="col-12">
        <div className="row">
          <div className="col-4">
            <Button title="Все" handler={showAll} />
          </div>
          <div className="col-4">
            <Button title="Завершенные" handler={showCompleted} />
          </div>
          <div className="col-4">
            <Button title="Незавершенные" handler={showNotCompleted} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({title, handler}) {
  const onClick = useCallback((event) => {
    handler();
  }, [title]);

  return <button className="btn btn-primary btn-block" onClick={onClick}>{title}</button>
}

export default Filter;