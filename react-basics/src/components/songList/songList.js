import React, { PropTypes } from 'react';
import styles from './songList.css';

const SongList = props => (
  <div className={styles.root}>
    {props.songs.map((songData, index) => <div
      key={songData.uri}
      onClick={() => props.selectSong(index)}
    >
      <img className={styles.image} src={songData.album.images[1].url} role="presentation" />
      <span className={styles.songDescription}>{songData.name}</span>
    </div>
        )}
  </div>
);

SongList.propTypes = {
    songs: PropTypes.array,
    selectSong: PropTypes.func,
};

export default SongList;
