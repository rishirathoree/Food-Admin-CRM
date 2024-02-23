import Categories from "../Models/Categories.js";
import Menus from "../Models/Menus.js"
import Users from "../Models/Users.js";

export const CreateMenus = async (req, res) => {

    try {

        const { name, categoryIds } = req.body;

        console.log(categoryIds)

        const categoryCheckPromises = categoryIds.map(async (id) => {
            const category = await Categories.findByPk(id);
            return !!category;
        });

        const categoryChecks = await Promise.all(categoryCheckPromises);
        
        if (categoryChecks.some(check => !check)) {
            return res.status(400).json({ msg: 'One or more category IDs do not exist' });
        }

        const CreatedMenu = await Menus.create({
            name,
            restaurantId: req.tku,
            categoryId: categoryIds ? categoryIds.map(id => parseInt(id)) : []
        });

        return res.status(201).json({ msg: 'Menu created successfullyyy', CreatedMenu });
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Internnal server errrror', error: error });

    }
};

export const GetMenus = async(req,res) => {
    
    const tokenId = req.tku

    try {
        const userToken = await Users.findByPk(tokenId)
        
        if(userToken.role === 'user'){

        const findAllMenusForUser = await Menus.findAll(
            {
                where:{
                    restaurantId:userToken.id
                },
                attributes:['name'],
                include:[{ model: Categories, as: "categories" }]
        }) 

        return res.status(200).json({msg:'successfully',findAllMenusForUser})

        }
        else{
            // for admin
            return res.status(200).json({msg:'successfully',userToken})
        }

    } catch (error) {
        return res.status(500).json({ msg: 'Internnal server errrror', error: error });
    }
}