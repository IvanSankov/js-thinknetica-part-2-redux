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
          <div className="offset-3 col-6">
            <Filter />

            <hr/>

            <Statistics />

            <hr/>

            <ContentList />
          </div>
        </div>
      </Provider>
    )
  }
}

