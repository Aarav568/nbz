//POST GET AND SETS
export const getBeat = async (req, res) => {
    try {
        // const post = await Post.findById(req.params.id).populate('author', 'displayName avatar')
        // res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

export const getBeatsByArtist = async (req, res) => {
    try {
        // const posts = await Post.find({ author: req.params.id }).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByPlaylist = async (req, res) => {
    try {
        // const posts = await Post.find({ author: req.params.id }).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByGenre = async (req, res) => {
    try {
        // const posts = await Post.find({ author: req.params.id }).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByTags = async (req, res) => {
    try {
        // const posts = await Post.find({ author: req.params.id }).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createBeat = async (req, res) => {
    const newPost = {
        artist: req.body.caption,
        genre: req.body.img,
        tag: req.userId
    }
    try {
        // const createdPost = await Post.create(newPost)
        // const user = await User.findById(req.userId)
        // user.posts.push(createdPost)
        // const savedPost = await user.save()
        // res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export const getSavedPosts = async (req, res) => {
    try {
        // const user = await User.findById(req.userId).populate('saved_posts', 'img')
        // const savedPosts = [...user.saved_posts]
        // savedPosts.splice(9)
        // res.status(200).json(savedPosts)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }

}

export const deleteBeat = async (req, res) => {
    try {
        // const user = await User.findById(req.userId)
        // const posts = await Post.find({ author: { $in: user.following } }).sort({'createdAt': -1}).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

//GET TRENDING TAGS
//SORT POSTS BY MOST LIKED SLICE TO 10 POSTS 
//EXTRACT TAGS AND RENDER