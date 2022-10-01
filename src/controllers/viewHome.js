import pool from '../configs/connectDB'

let getHome = (req, res) => {
   return res.render("hello.ejs");
}

module.exports = {
    getHome,

}