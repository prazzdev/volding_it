const controller = {}

controller.dashboard = (req, res) => {
    res.render('index', {
        title: 'Home',
        layout: 'layout/main'
    })
}

controller.addQuestion = (req, res) => {
    res.render('pages/add-question', {
        title: 'Add Question',
        layout: 'layout/main'
    })
}

module.exports = controller