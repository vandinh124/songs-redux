import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Wannabe', duration: '4:06' },
		{ title: 'Macarena', duration: '3:08' },
		{ title: 'All Star', duration: '3:15' },
		{ title: 'I want it That Way', duration: '3:16' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
