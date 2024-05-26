const { User } = require("../models")
const bcrypt = require("bcrypt")

class UserController {
    static helloWorld(req, res) {
        res.send("Hello World 5")
    }
    static async getAllDataUser(req, res) {
        try {
            const data = await User.findAll()
            // console.log(data, "==> DATA FINAL");
            res.status(200).json(data)
        } catch (error) {
            console.log(error, "==> ERROR LINE 9");
            res.status(500).json(error)
        }
    }

    static async createDataUser(req, res) {
        try {
            let salt = bcrypt.genSaltSync(+process.env.HASH);
            const { username, name, password } = req.body
            let hashPassword = bcrypt.hashSync(password, salt);
            const dataUser = {
                username,
                name,
                password: hashPassword
            }
            await User.create(dataUser)
            res.status(201).json({ message: "berhasil diinput" })
        } catch (error) {
            // console.log(error, "==> line 25");
            res.status(500).json(error)
        }
    }
}

// module export User

module.exports = UserController