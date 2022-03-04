/**
 * This is an actions creator class
 * type is mandatory
 */

export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
