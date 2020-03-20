const Lead = require('../models/Lead');

module.exports = {
    async index(req, res) {
        const lead = await Lead.find()
        return res.json(lead);
    },
    async show(req, res) {
        const lead = await Lead.findById(req.params.id);
        return res.json(lead);
    },

    async store(req, res) {
        const {
            nome,
            email,
            telefone
        } = req.body
        let lead = await Lead.findOne({
            email
        });
        if (!lead) {
            const lead = await Lead.create({
                nome,
                email,
                telefone,
            })
            return res.json([{
                "message": "Obrigado por se cadastrar"
            }, lead]);
        }
        return res.json({
            "message": "wow! já temos seu cadastro"
        });
    },
    async update(req, res) {
        const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json([{
            "message": "Lead editado com sucesso"
        }, lead]);
    },
    async destroy(req, res) {
        const lead = await Lead.findByIdAndDelete(req.params.id);

        return res.json({ "message": 'deletado com sucesso' });
    }

}