const categories = (req, res) => {
    let category = req.params.category
    try {
        if(category === "hardware") {
            category = 1
        } else if(category === "software") {
            category = 2
        } else if(category === "programming") {
            category = 3
        } else if(category === "seputar-it") {
            category = 4
        } 
    } catch (err) {
        category = res.json({
            statusCode: 404,
            message: 'Category not found'
        })
    }
    return category
}

module.exports = categories