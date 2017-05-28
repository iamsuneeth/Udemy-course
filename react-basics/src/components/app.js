import React from 'react';
import style from './app.css';
import SearchBar from './search/searchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './songItem/songItem';
import SongList from './songList/songList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            tracks: {},
            selectedSong: 0,
        };
    }

    getSongs = () => {
        searchSpotify(this.state.content)
            .then(({ tracks }) => this.setState({ tracks }))
            .catch(err => console.error(err));
    }


    render() {
        return (
          <div className={style.root}>
            <SearchBar updateText={text => this.setState({ content: text })} name="Get Songs" click={this.getSongs} />
            {this.state.tracks.items && <SongItem songData={this.state.tracks.items[this.state.selectedSong]} />}
            {this.state.tracks.items && <SongList songs={this.state.tracks.items} selectSong={(index) => this.setState({ selectedSong: index })} />}
          </div>
        );
    }
}

export default App;
