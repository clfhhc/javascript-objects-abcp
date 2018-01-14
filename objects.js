var playlist={Ne-yo:"So sick"}

function updatePlaylist(playlist,artistName,songTitle) {
  return object.assign{{},playlist,{[artistName]:songTitle}};
}

function removeFromPlaylist(playlist, artistName)