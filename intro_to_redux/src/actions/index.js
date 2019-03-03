

// Action creator
export const selectSong = (song) => {
    // return an action
    console.log(song)
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}


