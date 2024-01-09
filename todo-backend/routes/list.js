const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

router.post("/addTask", async (req, res) => {
  try {
    // store data in veriabe that come from client site
    const { tital, body, email } = req.body;
    //  finding user by given email and storing it in object
    const existingUser = await User.findOne({ email });
    // if the user exists then only the if block will exicute
    if (existingUser) {
      // storing a values in list with schema
      const list = new List({ tital, body, user: existingUser });
      //   saving the data in database and geting list from server
      await list.save().then(() => res.status(200).json({ list }));
      //   pushing the list in the user
      existingUser.list.push(list);
      //   saving user
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/updateTask/:id", async (req, res) => {
  try {
    // store data in veriabe that come from client site
    const { tital, body, email } = req.body;
    //  finding user by given email and storing it in object
    const existingUser = await User.findOne({ email });
    // if the user exists then only the if block will exicute
    if (existingUser) {
      //Update using findByIdAndUpdate
      const list = await List.findByIdAndUpdate(req.params.id, { tital, body });
      //   saving the data in database and showing Result
      await list
        .save()
        .then(() => res.status(200).json({ massege: "Task Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    // geting email from client site
    const { email } = req.body;
    // removing the id of list that we want to remove
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    );
    // if the user exists then only the if block will exicute
    if (existingUser) {
      // Deleting the list form id that we are given and shoing result as task deleted Succesfully
      const list = await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ massege: "Task Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({createdAt:-1});
  if (list.length !==0) {
    res.status(200).json({
      list
    });
  }else{
    res.status(200).json({
      message:"No tasks"
    })
  }
});

module.exports = router;
