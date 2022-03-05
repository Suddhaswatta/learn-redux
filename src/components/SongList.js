import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
const SongList = ({ songs, selectSong }) => {
  const songItems = songs.map((song) => (
    <li className="list-group-item" key={song.id}>
      <div className="row">
        <div className="col-md-9">{song.name}</div>
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
      </div>
    </li>
  ));
  return (
    <React.Fragment>
      <ul className="list-group">{songItems} </ul>
    </React.Fragment>
  );
};

const mapToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapToProps, { selectSong })(SongList);
