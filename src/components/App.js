import React from "react";
import SongDetails from "./SongDetails";
import SongList from "./SongList";

const App = () => {
  return (
    <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <SongList />
          </div>
          <div className="col-md-6">
            <SongDetails />
          </div>
        </div>
    </React.Fragment>
  );
};

export default App;
