const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username,password: hashpassword });
    await user.save().then(() => res.status(200).json({ user: user }));
  } catch (error) {
    res.status(400).json({
      Message: "User Already exists",
      error,
    });
  }
});

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message:"plese sign up first"})
        }

        const ispasswordCorrect  = bcrypt.compareSync(
          req.body.password,
          user.password
          );

        if(!ispasswordCorrect){
            res.status(400).json({
                message:"password is incorrect"
            })
        }

        const {password ,...others} = user._doc;
        res.status(200).json({others})


    } catch (error) {
      res.status(400).json({
        Message: "User dows not exists",
        error,
      });
    }
  });


module.exports = router;
