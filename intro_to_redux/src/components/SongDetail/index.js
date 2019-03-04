import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {

    let RenderSong = (song) => {
        return (
            <div>
                <h3>Details for:</h3>
                <p>Title : {song.title}
                    <br>
                    </br>
                    Dutarion: {song.duration}
                </p>

            </div>
        );
    }
    return (
        <div>
            {song ? RenderSong(song) : 'No Song Selected'}



        </div>
    )
}

const mapStateToProps = (state) => {

    return { song: state.selectedSong };

};
export default connect(mapStateToProps)(SongDetail)
