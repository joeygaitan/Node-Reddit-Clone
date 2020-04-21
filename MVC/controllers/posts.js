const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = (app) => {

    // SUBREDDIT
    app.get("/n/:subreddit", function(req, res) {
      Post.find({ subreddit: req.params.subreddit }).lean()
        .then(posts => {
          console.log(posts)
          res.render("posts-index", { posts });
        })
        .catch(err => {
          console.log(err);
        });
    });

    // CREATE
    app.post('/post/new', (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
      const post = new Post(req.body);

      // SAVE INSTANCE OF POST MODEL TO DB
      post.save((err, post) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/`);
      })


    });

    //display all posts
    app.get('/', (req, res) => {

      Post.find({}).lean()
      .then(posts => {
        console.log(posts)
        res.render("posts-index.handlebars", { posts });
      })
      .catch(err => {
        console.log(err.message);
      });
    
        
      });
    
    // make a new post
    app.get('/post/new', (req,res) => {
    
      res.render('post-new.handlebars');
    })

    // get one post
    app.get("/posts/:id", function(req, res) {
      // LOOK UP THE POST
      console.log(req.params.id, "__________________")
      Post.findById(req.params.id).lean().populate('comments').then((post) => {
        res.render('posts-show', { post })
      }).catch((err) => {
        console.log(err.message)
      })
    });

  };