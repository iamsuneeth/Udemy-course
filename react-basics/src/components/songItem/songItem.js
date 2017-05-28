import React, { PropTypes } from 'react';
import style from './songItem.css';

const SongItem = props => {
    const { songData } = props;
    return (
      <div className={style.root}>
        <div className={style.album}>
          <img src={songData.album.images[1].url} role="presentation" />
          <span className={style.albumName}>{songData.album.name}</span>
        </div>
        <div className={style.songAndDescription}>
          <audio controls duration src={songData.preview_url}></audio>
          <span className={style.songDescription}>Name: {songData.name}</span>
          <span className={style.songDescription}>Duration: {songData.duration_ms / 1000} s</span>
        </div>
      </div>
    );
};

SongItem.PropTypes = {
    songData: PropTypes.object,
};
export default SongItem;
