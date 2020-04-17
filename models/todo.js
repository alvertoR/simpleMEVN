import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    nombre: {type: String, required: [true, 'To do is not here']},
    date:{type: Date, default: Date.now},
    activo:{type: Boolean, default: true},
    usuarioId: String
});

//convert model
const toDo = mongoose.model('toDo',todoSchema);

export default toDo;