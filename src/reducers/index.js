import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    {
      id: 1,
      name: "Eye Of The Tiger",
      artist: "Survivor",
      duration: "4:00",
      lyrics: 
    `
    Rising up, back on the street
    Did my time, took my chances
    Went the distance, now I'm back on my feet
    Just a man and his will to survive
    So many times it happens too fast
    You change your passion for glory
    Don't lose your grip on the dreams of the past
    You must fight just to keep them alive
    It's the eye of the tiger
    It's the thrill of the fight
    Rising up to the challenge of our rival
    And the last known survivor
    Stalks his prey in the night
    And he's watching us all with the eye of the tiger
    Face to face, out in the heat
    Hanging tough, staying hungry
    They stack the odds 'til we take to the street
    For the kill with the skill to survive
    It's the eye of the tiger
    It's the thrill of the fight
    Rising up to the challenge of our rival
    And the last known survivor
    Stalks his prey in the night
    And he's watching us all with the eye of the tiger
    Rising up straight to the top
    Had the guts, got the glory
    Went the distance, now I'm not going to stop
    Just a man and his will to survive
    It's the eye of the tiger
    It's the thrill of the fight
    Rising up to the challenge of our rival
    And the last known survivor
    Stalks his prey in the night
    And he's watching us all with the eye of the tiger
    The eye of the tiger
    The eye of the tiger
    The eye of the tiger
    The eye of the tiger`,
    },
    { id: 2, name: "Song B", artist: "artist B", duration: "4:00" },
    { id: 3, name: "Song C", artist: "artist C", duration: "4:00" },
  ];
};

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
