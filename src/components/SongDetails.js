import React from "react";
import { connect } from "react-redux";
const SongDetails = ({ song }) => {
  if (!song) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      <div className="card">
          <div className="card-header">{song.artist}</div>
        <div className="card-body">
          <h5 className="card-title">{song.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Lyrics</h6>
          <div className="card-text">
            <pre>{song.lyrics}</pre>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const getState = (state) => {
  console.log(state);
  return { song: state.selectSong };
};

export default connect(getState)(SongDetails);
