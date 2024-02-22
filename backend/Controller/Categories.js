import Categories from "../Models/Categories.js"
import Users from "../Models/Users.js"

export const CreateCategories = async (req, res) => {

    const { name } = req.body

    try {
        const findUser = await Users.findByPk(req.tku)

        if (!findUser) { return res.json({ msg: 'cant get the restaurant based on token' }) }

        const CreatedCategory = await Categories.create({
            name, restaurantId: findUser.id
        })

        return res.json({ msg: 'successfully created categories', CreatedCategory })
    } catch (error) {
        return res.status(400).json({ msg: 'Internal error', error })
    }

}

export const GetRestaurantCategories = async (req, res) => {

    try {
        const tokenId = req.tku

        const findUser = await Users.findOne({
            where: { id: tokenId }, attributes: ['id', 'role'],
        })

        if (findUser.role === 'user') {
            
            const findCategories = await Categories.findAll({ where: { restaurantId: findUser.id }, include: [{ model: Users, as: "restaurant" }] })
            
            return res.json({ msg: 'got the categories', categories: findCategories })
        }
        
        const findCategoriesAdmin = await Categories.findAll({ include: [{ model: Users, as: 'restaurant', attributes: ['email', 'username'] }] })
        
        console.log(findCategoriesAdmin)
        
        return res.json({ msg: 'got the categories', categories: findCategoriesAdmin })

    } catch (error) {

        console.log(error)
        
        return res.status(400).json({ msg: 'internal error', error })

    }

}

export const UpdateCategories = async (req, res) => {
    console.log('first')
}

export const DeleteCategories = async (req, res) => {
    try {
        const user = await Users.findByPk(req.tku);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const categoryId = req.params.id;

        const categoryToDelete = await Categories.findByPk(categoryId);

        if (!categoryToDelete) {
            return res.status(404).json({ error: "Category not found" });
        }

        if (user.id !== categoryToDelete.restaurantId) {
            return res.status(403).json({ msg: "This category belongs to someone else, you can't delete this" });
        }

        await categoryToDelete.destroy()

        return res.json({ msg: 'Category successfully deleted', deletedCategory: categoryToDelete });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
