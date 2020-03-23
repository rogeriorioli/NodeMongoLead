const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const user = await User.find()
        return res.json(user);
    },
    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    async store(req, res) {
        const {
           email,
            password
        } = req.body
        if(!email){
            const user = await User.create({
               email,
               password,
            })
            return res.json([{
                "message": "user criado com sucesso"
            }]);
        }
            return res.json([{
                "message": "user ja foi criado com anteriormente"
            }]);
        },
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json([{
            "message": "Lead editado com sucesso"
        }, user]);
    },
    async destroy(req, res) {
        const user = await User.findByIdAndDelete(req.params.id);

        return res.json({ "message": 'deletado com sucesso' });
    }

}