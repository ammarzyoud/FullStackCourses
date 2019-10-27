const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

const tagsSchema = new Schema({
    label: String,
    tagLink: String,
  });
  
  let Tags = mongoose.model("tags", tagsSchema);

  let getTag = cb => {
    Tags.find({}, function(err, docs) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("DOCS:", docs);
      cb(docs);
    });
  };
  
  let insertTag = (cb, obj) => {
    console.log("OBJ", obj);
    if(
     obj.label!=""&&
     obj.tagLink!=""
    )
    {
    Tags.insertMany(
      [
        {
          label: obj.label,
          tagLink: obj.tagLink,
        }
      ],
      function(err, docs) {
        if (err) {
          console.log("ERR:", err);
        }
        console.log("DOCS:", docs);
        getTag(cb);
      }
    );}
  };
  
  module.exports = {
    getTag,
    insertTag
  };