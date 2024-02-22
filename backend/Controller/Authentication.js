import Users from "../Models/Users.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const privateKey = 'b3fyb32cubelc2eucfb2o4bc3eubcg'

export const Signup = async (req, res) => {
    const { email, username, password,role } = req.body
    try {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await Users.create({
            email, password: hashedPassword, username,
        })
        return res.json({ msg: 'successfully created user', user })
    } catch (error) {
        return res.status(406).json({ msg: 'something went wrong', error: error })
    }
}

export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({
            where: { email },
            attributes: ['id', 'email', 'password']
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Email' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        const token = jwt.sign({ userId: user.id }, privateKey);

        return res.json({ msg: 'Successfully logged in', user, token });
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};

export const TokenChecker = (req, res, next) => {

    console.log(req.headers)

    if (!req.headers.authorization) {
        return res.status(401).json({ msg: 'token required' })
    }

    const headerToken = req.headers.authorization.split(' ')[1]

    jwt.verify(headerToken, privateKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msh: 'Cannot Initialize the token to user' })
        }

        req.tku = decoded.userId

        next()
    })
}