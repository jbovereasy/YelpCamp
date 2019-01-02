var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
  {
    name: "Yosemite",
    image:
      "https://www.mercurynews.com/wp-content/uploads/2018/05/sjm-camping-06xx-06.jpg?w=620"
  },
  {
    name: "Joshua Tree",
    image:
      "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_Jtree_heroDE_JoshuaTrees_1280x642_downsized.jpg"
  },
  {
    name: "Sequoia",
    image:
      "https://thumbnails.trvl-media.com/NvOaB1B8uRwubQMQk86ZwtoSSsg=/768x432/images.trvl-media.com/media/content/shared/images/travelguides/destination/6084619/Sequoia-National-Park-203745.jpg"
  }
];

//mongoose/model config
// var blogSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   body: String,
//   created: { type: Date, default: Date.now }
// });

// var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image:
//     "https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg",
//   body: "Hello this is a blog post"
// });

//restful routes
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.post("/campgrounds", function(req, res) {
  //logic to add the form
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  //shows the form to get the data to the post route
  res.render("new.ejs");
});

app.listen(3000, function() {
  console.log("YelpCamp Server listening");
});
