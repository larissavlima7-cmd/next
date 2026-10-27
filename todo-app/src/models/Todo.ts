//modelo para representar a tarefa no banco de dados

import mongoose from "mongoose";
import { title } from "process";

export interface ITodo extends Document{
    title: string, 
    completed: boolean;
    createdAT: Date;
}
//minha classe modelo do banco => 

//regra do schema para tarefas
const TodoSchema: Schema<ITodo> = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "O titulo da tarefa é obrigatório"],
        trim: true,
        maxLength: [100, "O título da tarefa não pode ter mais de 100 caracteres"]
    },
    completed: {
        type: Boolean,
        default: true
    },
    createdAT: {
        type: Date, 
        default: Date.now
    }
});

const Todo: Model<ITodo> = mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

//exporta o modelo
export default Todo; 