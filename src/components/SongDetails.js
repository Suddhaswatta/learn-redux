import React from "react";
import { connect } from "react-redux";
const SongDetails = ({ song }) => {
  if (!song) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{song.name}</h5>
          <p className="card-text">
            Artist : {song.artist} Duration :{song.duration}
          </p>
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
