const SongsManager = function () {
    const _songs = {};
    const _basicUrl = "https://www.youtube.com/watch?v=";
    const addSong = (name, url) => {
        _songs[name] = url.replace(_basicUrl, "");
    };
    const getSong = (name) => _basicUrl + _songs[name];
    return {
        addSong,
        getSong,
    };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
