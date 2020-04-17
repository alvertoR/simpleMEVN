import todo from '../models/todo';

var controller = {
    //Agrear cositas
    addTodo: async(req, res) => {
        const body = req.body;
        try{
            const todoDb = await todo.create(body);
            res.status(200).json(todoDb);
        }catch (error){
            return res.status(500).json({
                mensaje: 'Error rey',
                error
            })
        }
    },
    //Traer Cositas
    getTodo: async(req,res) => {
        const _id = req.params.id;

        try{
            const todoDb = await todo.findOne({_id});
            res.json(todoDb);            
        }catch(error){
            return res.status(400).json({
                mensaje: 'Erro rey',
                error
            })
        }
    },
    getTodos: async(req,res) => {
        try{
            const todoDb = await todo.find();
            res.json(todoDb);
        }catch(error){
            return res.status(400).json({
                mensaje: 'Error rey',
                error
            });
        }
    },
    //Elimar cositas
    deleteTodo: async(req, res) => {
        const _id = req.params.id;
        try{
            const todoDb = await todo.findByIdAndDelete({_id});

            if(!todoDb){
                return res.status(400).json({
                    mensaje: 'No está ese id rey... ',
                    error
                });
            }

            res.json(todoDb);

        }catch(error){
            return res.status(400).json({
                mensaje: 'Error rey',
                error
            });
        }
    },
    //Actualizar cositas
    updateTodo: async(req, res) => {

        const _id  = req.params.id;
        const body = req.body;

        try{
            const todoDb = await todo.findByIdAndUpdate(
                _id,
                body,
                {new: true}
            );

            res.json(todoDb);

        }catch(error){
            return res.status(400).json({
                mensaje: 'Error rey',
                error
            });
        }
    }

};

module.exports = controller;