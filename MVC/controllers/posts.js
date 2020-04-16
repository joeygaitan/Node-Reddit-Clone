const Post = require('../models/post');

module.exports = (app) => {

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

    app.get('/', (req, res) => {

      Post.find({}).lean()
      .then(posts => {
        console.log(posts)
        res.render("posts-index", { posts });
      })
      .catch(err => {
        console.log(err.message);
      });
    
        
      });
    
    app.get('/post/new', (req,res) => {
    
      res.render('post-new.handlebars');
    })

    app.get("/posts/:id", function(req, res) {
      // LOOK UP THE POST
      console.log(req.params.id, "__________________")
      Post.findById(req.params.id).lean()
        .then(post => {
          console.log(post,"ganlgagarguogangaopna;ponaw;nga;o")
          res.render("posts-show", { post });
        })
        .catch(err => {
          console.log(err.message);
        });
    });

  };