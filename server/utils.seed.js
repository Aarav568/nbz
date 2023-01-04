import Genre from './models/genre.js'
import Artist from './models/artist.js'
import Beat from "./models/beat.js"
import Playlist from "./models/playlist.js"

import mongoose from 'mongoose'

const URL = 'mongodb+srv://admin:admin@nashak-beats.oxfxxgk.mongodb.net/?retryWrites=true&w=majority'


const GENRES = [
    "Boombap",
    "Trap",
    "G-funk",
    "Fast",
    "Experimental",
    "New Wave",
    "Drill",
    "Cloud",
    "Mumble",
    "Old-school"
]

const ARTISTS =
    [
        {
            Name: "Kendrick Lamar",
            Genre: "Cloud",
            Img: "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699",
            Beats: [
                "Bitch, Don't Kill My Vibe",
                "DNA.",
                "Element.",
                "Humble.",
                "King Kunta",
                "Money Trees",
                "m.A.A.d city",
                "The Blacker the Berry",
                "To Pimp a Butterfly",
                "Alright"
            ]
        },
        {
            Name: "J. Cole",
            Genre: "G-funk",
            Img: "https://i.scdn.co/image/ab67616d00001e02c6e0948bbb0681ff29cdbae8",
            Beats: [
                "A Tale of 2 Citiez",
                "Apparently",
                "Can't Get Enough",
                "Dollar and a Dream III",
                "G.O.M.D.",
                "In the Morning",
                "KOD",
                "Love Yourz",
                "No Role Modelz",
                "Wet Dreamz"
            ]
        },
        {
            Name: "Drake",
            Genre: "Mumble",
            Img: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5",
            Beats: [
                "Controlla",
                "Energy",
                "God's Plan",
                "Hotline Bling",
                "I'm Upset",
                "In My Feelings",
                "Laugh Now Cry Later",
                "Look What You've Done",
                "Nonstop",
                "One Dance"
            ]
        },
        {
            Name: "Kanye West",
            Genre: "Boombap",
            Img: "https://i.scdn.co/image/ab67616d00001e02fd61ea11e50ba0b7eade9466",
            Beats: [
                "Ultralight Beam",
                "Heartless",
            ]
        },
        {
            Name: "Tupac Shakur",
            Genre: "Old-school",
            Img: "https://i.scdn.co/image/ab67616d00001e02073aebff28f79959d2543596",
            Beats: [
                "California Love",
                "Dear Mama",
                "I Get Around",
                "Keep Ya Head Up",
                "Life Goes On",
                "Me Againstst My Homies",
                "So Many Tears",
                "Thug Mansion",
                "Troublesome",
                "Untouchable"
            ]
        },
        {
            Name: "Eminem",
            Genre: "Fast",
            Img: "https://i.scdn.co/image/ab67706c0000bebb132592c603bf37999f614f07",
            Beats: [
                "Lose Yourself",
                "Without Me",
                "Cleanin' Out My Closet",
                "The Real Slim Shady",
                "Love the Way You Lie",
                "Not Afraid",
                "My Name Is",
                "Cleaning Out My Closet",
                "Rap God",
                "The Monster"
            ]
        },
        {
            Name: "Jay-Z",
            Genre: "Drill",
            Img: "https://i.scdn.co/image/ab67616d00001e02019d21fe4f3ecbc818825c59",
            Beats: [
                "Empire State of Mind",
                "99 Problems",
                "Numb/Encore",
                "Dead Presidents",
                "On to the Next One",
                "Hard Knock Life",
                "Izzo (H.O.V.A.)",
                "Can I Get A...",
                "I Just Wanna Love U (Give It 2 Me)",
                "Big Pimpin'"
            ]
        },
        {
            Name: "Nas",
            Genre: "Old-school",
            Img: "https://i.scdn.co/image/ab67616d00001e02d0673d1dd6938dad8530823b",
            Beats: [
                "The World Is Yours",
                "Illmatic",
                "If I Ruled the World (Imagine That)",
                "Hate Me Now",
                "Nas Is Like",
                "Life's a Bitch",
                "One Mic",
                "Ether",
                "Got Yourself a Gun",
                "Hip Hop Is Dead"
            ]
        },
        {
            Name: "Lil Wayne",
            Genre: "Drill",
            Img: "https://i.scdn.co/image/ab67616d00001e02801cf8805673d07eb26da351",
            Beats: [
                "A Milli",
                "Lollipop",
                "Got Money",
                "Loyal",
                "Mirror",
                "6 Foot 7 Foot",
                "How to Love",
                "Sucker for Pain",
                "Love Me",
                "God Bless Amerika"
            ]
        },
        {
            Name: "Biggie Smalls",
            Genre: "Trap",
            Img: "https://i.scdn.co/image/ab67616d00001e02a136f71553f34d930b43f7bb",
            Beats: [
                "Juicy",
                "Big Poppa",
                "Hypnotize",
                "One More Chance/Stay with Me",
                "Mo Money Mo Problems",
                "Unbelievable",
                "Warning",
                "Sky's the Limit",
                "Ten Crack Commandments",
                "Ready to Die"
            ]
        }
    ]
const PLAYLIST = [
    {
        Name: "Drll Beats",
        Beats: [
            "Bitch, Don't Kill My Vibe",
            "DNA.",
            "Element.",
            "In the Morning",
            "KOD",
            "Look What You've Done",
            "Nonstop",
            "One Dance",
            "So Many Tears",
            "Thug Mansion",
            "Troublesome",
            "Cleaning Out My Closet",
            "Can I Get A...",
            "I Just Wanna Love U (Give It 2 Me)",
            "Big Pimpin'",
            "Got Money",
            "Loyal",
            "Mirror",
            "6 Foot 7 Foot",
            "Mo Money Mo Problems",
            "Unbelievable",
        ],
        Img: "https://i.scdn.co/image/ab67616d00001e02f15a73a60ccc1fd8c70ec295",
        Genre: "Drill",
        Tags: ["featured", "trending"]
    },
    {
        Name: "Trap Mix",
        Beats: [
            "Controlla",
            "Energy",
            "God's Plan",
            "Hotline Bling",
            "I'm Upset",
            "In My Feelings",
            "Laugh Now Cry Later",
            "Look What You've Done",
            "Nonstop",
            "One Dance",
            "Ultralight Beam",
            "Heartless",
            "How to Love",
            "Sucker for Pain",
            "Love Me",
            "God Bless Amerika",
            "Big Poppa",
            "Hypnotize",
            "One More Chance/Stay with Me",
            "Mo Money Mo Problems",
        ],
        Img: "https://i.scdn.co/image/ab67616d0000b273c5c49f86e1e2566da19b1a1f",
        Genre: "Trap",
        Tags: ["featured", "trending"]
    },
    {
        Name: "New Wave",
        Beats: [
            "DNA.",
            "Element.",
            "Humble.",
            "King Kunta",
            "Money Trees",
            "m.A.A.d city",
            "The Blacker the Berry",
            "To Pimp a Butterfly",
            "Alright",
            "A Tale of 2 Citiez",
            "Apparently",
            "Can't Get Enough",
            "Dollar and a Dream III",
            "G.O.M.D.",
            "In the Morning",
            "KOD",
            "Love Yourz",
            "No Role Modelz",
            "Wet Dreamz",
            "Controlla",
            "Energy",
            "God's Plan",
            "Hotline Bling",
            "Life Goes On",
            "Me Againstst My Homies",
            "So Many Tears",
            "Thug Mansion",
            "Troublesome",
            "Untouchable",
            "Lose Yourself",
            "Without Me",
            "Cleanin' Out My Closet",
            "The Real Slim Shady",
            "Love the Way You Lie",
            "Not Afraid",
            "My Name Is",
            "Cleaning Out My Closet",
            "Rap God",
            "The Monster"
        ],
        Img: "https://i.scdn.co/image/ab6761610000e5eb920706d175a9ca971f527e09",
        Genre: "New Wave",
        Tags: ["featured", "trending"]
    },
    {
        Name: "Best Selling",
        Beats: [
            "Empire State of Mind",
            "99 Problems",
            "Numb/Encore",
            "Hate Me Now",
            "Nas Is Like",
            "Life's a Bitch",
            "A Milli",
            "Lollipop",
            "Got Money",
            "Loyal",
            "Juicy",
            "Big Poppa",
            "Hypnotize",
            "One More Chance/Stay with Me",
            "Mo Money Mo Problems",
            "Unbelievable",
            "Warning",
            "Sky's the Limit",
            "Ten Crack Commandments",
            "Ready to Die"
        ],
        Img: "https://i.scdn.co/image/ab67616d00001e02d8981b7f19f7183f505decf6",
        Genre: "Boombap",
        Tags: ["featured", "trending"]
    },
    {
        Name: "Old School",
        Beats: [
            "99 Problems",
            "Numb/Encore",
            "Dead Presidents",
            "On to the Next One",
            "Hard Knock Life",
            "Izzo (H.O.V.A.)",
            "Can I Get A...",
            "If I Ruled the World (Imagine That)",
            "Hate Me Now",
            "Nas Is Like",
            "Life's a Bitch",
            "One Mic",
            "A Milli",
            "Lollipop",
            "Got Money",
            "Loyal",
            "Mirror",
            "6 Foot 7 Foot",
            "How to Love",
            "Sucker for Pain",
            "Love Me",
            "God Bless Amerika",
            "Juicy",
            "Big Poppa",
            "Hypnotize",
            "One More Chance/Stay with Me",
            "Mo Money Mo Problems",
            "Unbelievable",
            "Warning",
            "Sky's the Limit",
            "Ten Crack Commandments",
            "Ready to Die"
        ],
        Img: "https://i.scdn.co/image/ab67616d0000b273d71b82afb74579d2a11697a0",
        Genre: "Old-school",
        Tags: ["featured", "trending"]
    },
    {
        Name: "Gangster Vibes",
        Beats: [
            "Life Goes On",
            "Me Againstst My Homies",
            "So Many Tears",
            "Thug Mansion",
            "Troublesome",
            "Untouchable",
            "Lose Yourself",
            "Without Me",
            "Cleanin' Out My Closet",
            "The Real Slim Shady",
            "Love the Way You Lie",
            "Not Afraid",
            "My Name Is",
            "Cleaning Out My Closet",
            "Rap God",
            "The Monster",
            "Got Money",
            "Loyal",
            "Juicy",
            "Big Poppa",
            "Hypnotize",
            "One More Chance/Stay with Me",
            "Mo Money Mo Problems",
            "Unbelievable",
            "Warning",
            "On to the Next One",
            "Hard Knock Life",
            "Izzo (H.O.V.A.)",
            "Can I Get A...",
            "If I Ruled the World (Imagine That)",
            "Hate Me Now",
            "Nas Is Like",
            "Life's a Bitch",
            "Hypnotize",
            "One More Chance/Stay with Me",
            "Mo Money Mo Problems",
            "Unbelievable",
            "Warning",
            "Sky's the Limit",
            "Ten Crack Commandments",
        ],
        Img: "https://i.scdn.co/image/ab67616d00001e029910d4d7eb5258f303ec9543",
        Genre: "Old-school",
        Tags: ["featured", "trending"]
    }
]


const createGeneres = async () => {
    try {
        GENRES.forEach(async e => {
            const existingGenre = await Genre.findOne({ e })
            if (existingGenre) {
                console.log("ALREADY EXISTS")
            }
            const savedGenre = await Genre.create({ genre: e })
            console.log(`Created ${savedGenre}`)
        })
        console.log("All genres created successfully")
    }
    catch (err) {
        console.log(err)
    }
}

const createArtists = async () => {
    try {
        ARTISTS.forEach(async e => {
            const existingArtist = await Artist.findOne({ name: e.Name })
            if (existingArtist) return res.status(404).json({ message: "Artist already exists!" })
            const genre = await Genre.findOne({ name: e.Genre })
            const artist = await Artist.create({
                name: e.Name,
                genre,
                img: e.Img
            })
            e.Beats.forEach(async beat => {
                await Beat.create({
                    name: beat,
                    genre,
                    artist: artist
                })
            })
        })
        console.log("All Artists created successfully")
    }
    catch (err) {
        console.log(err)
    }
}

const linkBeats = () => {
    try {
        ARTISTS.forEach(async e => {
            const artist = await Artist.findOne({ name: e.Name })
            const beats = await Beat.find({ artist })
            beats.forEach(async beat => {
                await artist.beats.push(beat)
            })
            await artist.save()
        })
    }
    catch (err) {
        console.log(err)
    }
}

const createPlaylists = () => {
    PLAYLIST.forEach(async e => {
        const genre = await Genre.findOne({genre: e.Genre})
        const playlist = await Playlist.create(
            {
                name: e.Name,
                img: e.Img,
                genre,
            }
        )
        e.Beats.forEach( async beatName => {
            const beat = await Beat.findOne({name: beatName})
            await playlist.beats.push(beat)
        })
        await playlist.save()
    })
    console.log("Playlists Created")
}

const linkBeatsToPlaylist = () => {
    try {
        PLAYLIST.forEach(async e => {
            const playlist = await Playlist.findOne({ name: e.Name })
            const beats = await Beat.find({name: {$in: e.Beats}})
            playlist.beats = beats
            await playlist.save()
        })
    }
    catch (err) {
        console.log(err)
    }
}


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, async (err) => {
    if (!err) {
        console.log("database connected, running your queries")
        // await createGeneres()
        // await createArtists()
        // linkBeats()
        // createPlaylists()
        // linkBeatsToPlaylist()
    }
    console.log(err)
})