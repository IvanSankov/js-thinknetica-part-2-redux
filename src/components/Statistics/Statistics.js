import React from "react";

function Statistics({ sectionNumber, subSectionNumber, completedSectionNumber, completedSubSectionNumber }) {
  return (
    <div className="row">
      <h3> Статистика </h3>
      <div className="col-12">
        <div className="row">
          <div className="col-3">Всего разделов</div>
          <div className="col-3">Всего подразделов</div>
          <div className="col-3">Всего завершенных разделов</div>
          <div className="col-3">Всего завершенных подразделовразделов</div>

          <div className="col-3">{ sectionNumber }</div>
          <div className="col-3">{ subSectionNumber }</div>
          <div className="col-3">{ completedSectionNumber }</div>
          <div className="col-3">{ completedSubSectionNumber }</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;