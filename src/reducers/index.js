import { combineReducers } from "redux";

const songsReducers =()=>{
  return [
    { id: 1, name: "Song A", artist: "artist A", duration: "4:00" },
    { id: 2, name: "Song B", artist: "artist B", duration: "4:00" },
    { id: 3, name: "Song C", artist: "artist C", duration: "4:00" },
  ];
} 

const selectSong = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED": {
      return action.payload;
    }
    default: {
      return selectedSong;
    }
  }
};
export default combineReducers({
  songs: songsReducers,
  selectSong,
});
