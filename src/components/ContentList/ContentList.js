import React, {useCallback} from "react";

import Section from "../Section";

function ContentList({ sections, addNewSection }) {
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="text-center">Table of contents of the book</h3>
        { Object.entries(sections).map(data => <Section key={data[0]} section={data[1]} />) }
        <hr/>
        <AddSection addNewSection={addNewSection} />
      </div>
    </div>
  );
}

function AddSection({ addNewSection }) {
  const onSubmit = useCallback(event => {
    event.preventDefault();
    addNewSection(event.target.newSection.value);
    event.target.newSection.value = '';
  }, []);

  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <input placeholder="Добавить раздел" type="text" name="newSection" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Добавить</button>
    </form>
  );
}

export default ContentList;