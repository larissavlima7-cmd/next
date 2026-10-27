//Serviço / biblioteca de ocnexão ocm o mongo DB

import mongoose from "mongoose";

//pega os dados da .env para o mongodb
const MONGODB_URI = process.env.DATABASE_URL;

if(!MONGODB_URI){
    throw new Error("Por favor, defina a DATABASE_URL no arquivo .env.local");
}

let cached = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {conn: null, promise: null};
}

async function connectMongo() {

    //se já existir uma conexão , retorna a conexão existente
    if(cached.conn){
        return cached.conn;
    }

    // se não existir uma pre-conexão criar uma
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log("Conectado ao MongoDB");
            return mongoose;
        });
    }

    // se já existir uma pre-conexão executa a chamada
    try {
        cached.conn = await cached.promise;
    } catch (e) { // se caso der algum erro retorna o erro
        cached.promise = null;
        throw e;
    }

    // se não existir uma chamada, e existir uma preconexão executa a chamada
    return cached.conn;
}

export default connectMongo;

// global é usadi para manter a conexão em cache durante o uso do banco
//evita abrir várias conexões com o banco a cada nova solicitação (idieia parecida com singleton)
// a conexão é reutilizada sempre que necessário evitando o  famoso fatalerror: " To many clients already"
