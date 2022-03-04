import React from "react";
import { connect } from "react-redux";


const SongList = ({songs}) => {
  console.log(`Received Data from Props \n${JSON.stringify(songs)}`);
  return (
    <React.Fragment>
      <div>Song Works</div>
    </React.Fragment>
  );
};

const mapToProps = state =>{
  
  return {songs:state.songs};
}
export default connect(mapToProps)(SongList);
