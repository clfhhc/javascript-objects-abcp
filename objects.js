var playlist={Neyo:"So sick"};

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({},playlist,{[artistName]:songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}