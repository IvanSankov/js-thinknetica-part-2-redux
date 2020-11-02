import React from 'react';

import store from "./redux/store";
import { Provider } from "react-redux";
import Filter from "./components/Filter";
import ContentList from "./components/ContentList";
import Statistics from "./components/Statistics";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col-6">
            <ContentList />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <Filter />
              <hr/>
              </div>
              <div className="col-12">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
}

