import { combineReducers } from "redux";

const songsReducers =()=>{
  return [
    { id: 1, name: "Song A", artist: "slipknot", duration: "4:00" },
    { id: 2, name: "Song B", artist: "slipknot", duration: "4:00" },
    { id: 3, name: "Song C", artist: "slipknot", duration: "4:00" },
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
