// IMPORTS----------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// ROUTE IMPORTS----------------------------------------------------------
import userRoutes from './routes/user.js'
import beatRoutes from './routes/beat.js'
import artistRoutes from './routes/artist.js'
import playlistRoutes from './routes/playlist.js'
import genreRoutes from './routes/genre.js'
import orderRoutes from './routes/order.js'

// CONFIGURATION----------------------------------------------------------
const app = express()

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(cors())
const URL = 'mongodb+srv://admin:admin@nashak-beats.oxfxxgk.mongodb.net/?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(bodyParser.json({ limit: '30mb' }));

// SERVER-----------------------------------------------------------------
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        app.listen(process.env.PORT || "8000", () => {
            console.log("database connected & server started")
        })
        return
    }
    console.log(err)
})

// ROUTES-----------------------------------------------------------------
app.use('/api/user', userRoutes)
app.use('/api/beat', beatRoutes)
app.use('/api/artist', artistRoutes)
app.use('/api/genre', genreRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/playlist', playlistRoutes)