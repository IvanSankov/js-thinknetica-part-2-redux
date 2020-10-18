import React, { useCallback } from "react";
import Subsection from "../Subsection";

function Section({ section, addNewSubsection}) {
  return (
    <div className="row">
      <h5 className={!section.completed ? "text-danger" : ''}>{section.title}</h5>
      <div className="col-12">
        <div className="row">
          {Object.entries(section.subsections)
            .map(data => <Subsection sectionId={section.id} key={data[0]} subsection={data[1]}/>)
          }
          <AddSubsection sectionId={section.id} addNewSubsection={addNewSubsection} />
        </div>
      </div>
    </div>
  );
}

function AddSubsection({ sectionId, addNewSubsection }) {
  const onSubmit = useCallback(event => {
    event.preventDefault();
    addNewSubsection(sectionId, event.target.newSubsection.value);
    event.target.newSubsection.value = '';
  }, [sectionId]);

  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <input placeholder="Добавить подраздел" type="text" name="newSubsection" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Добавить</button>
    </form>
  );
}

export default Section;