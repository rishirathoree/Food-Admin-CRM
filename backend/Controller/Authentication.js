import Users from "../Models/Users.js"

export const Signup = async(req,res) => {
    console.log(req.body)
    const {email,username,password} = req.body
    try {
        const user = await Users.create({
            email,password,username
        })
        return res.json({msg:'successfully created user',user})
    } catch (error) {
        return res.json({msg:'something went wrong',error})
    }
}

export const Login = (req,res) => {}
export const TokenChecker = (req,res) => {}