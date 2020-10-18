import React, { useCallback } from "react";

function Subsection({subsection, markAsComplete, sectionId}) {

  const onChange = useCallback((event) => {
    markAsComplete(sectionId, subsection.id);
  }, [sectionId, subsection.id]);

  return (
    <div className={`offset-1 col-10 ${!subsection.completed ? "text-danger" : ''}`}>
      <input type="checkbox" onChange={onChange} checked={subsection.completed}/> {subsection.title}
    </div>
  );
}


export default Subsection;

