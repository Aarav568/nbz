
//RENDER ROUTES----------------------------
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/artist", async (req, res) => {
    const response = await fetch("https://datacollector0912.herokuapp.com/api/genre/")
    const data = await response.json()
    const artistResponse = await fetch("https://datacollector0912.herokuapp.com/api/artist/")
    const artistsData = await artistResponse.json()
    res.render("artist", { genres: data, artists: artistsData })
})
app.get("/beat", async (req, res) => {
    const genreResponse = await fetch("https://datacollector0912.herokuapp.com/api/genre/")
    const genreData = await genreResponse.json()
    const artistResponse = await fetch("https://datacollector0912.herokuapp.com/api/artist/")
    const artistsData = await artistResponse.json()
    const beatResponse = await fetch("https://datacollector0912.herokuapp.com/api/beat/")
    const beatData = await beatResponse.json()
    res.render("beat", { genres: genreData, artists: artistsData, beats: beatData })
})
app.get("/genre", async (req, res) => {
    const genreResponse = await fetch("https://datacollector0912.herokuapp.com/api/genre/")
    const genreData = await genreResponse.json()
    res.render("genre", { genres: genreData })
})
app.get("/playlist", async (req, res) => {
    const genreResponse = await fetch("https://datacollector0912.herokuapp.com/api/genre/")
    const genreData = await genreResponse.json()
    const playlistResponse = await fetch("https://datacollector0912.herokuapp.com/api/playlist/")
    const playlistData = await playlistResponse.json()
    res.render("playlist", { playlists: playlistData, genres: genreData })
})
app.get("/:playlistId/addToPlaylist/:name", async (req, res) => {
    const { playlistId } = req.params
    const beatResponse = await fetch("https://datacollector0912.herokuapp.com/api/beat/")
    const beatData = await beatResponse.json()
    const beatsOfPlaylist = await Playlist.findById(playlistId).populate("beats")
    res.render("playlist-add-beats", { playlistId: playlistId, beats: beatData, name: req.params.name, playlistBeats: beatsOfPlaylist.beats })
})