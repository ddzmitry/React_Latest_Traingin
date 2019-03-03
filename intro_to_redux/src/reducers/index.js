
import { combineReducers } from 'redux';


export const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I want it That Way', duration: '1:45' },

    ];
};


export const SelectedSongReducer = (selectedSong =null,action=null ) => {
    switch (action.type) {
        case "SONG_SELECTED":
            return action.payload;
        default:
            return null;
            break;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong:SelectedSongReducer
});

