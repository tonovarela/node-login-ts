import { CategoryModel, ProductModel, UsuarioModel, MongoDatabase, seedData } from "../index";
import { envs } from "../../config";



(async () => {
    MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    });
    await main();
    MongoDatabase.disconnect();
})();

const randomNumber = (numero: number) => {
    return Math.floor(Math.random() * (numero));
}


async function main() {
    await Promise.all([
        UsuarioModel.deleteMany({}),
        ProductModel.deleteMany({}),
        CategoryModel.deleteMany({})
    ]);


    const usuarios = await UsuarioModel.insertMany(seedData.users);
    const categorias = await CategoryModel.insertMany(seedData.categories.map(c => {
        return {
            ...c,
            usuario: usuarios[randomNumber(usuarios.length - 1)]._id
        }
    }));
    await ProductModel.insertMany(seedData.products.map(p => {
        const categoria = categorias[randomNumber(categorias.length - 1)]._id;
        const usuario = usuarios[randomNumber(usuarios.length - 1)]._id;
        return {
            ...p,
            categoria,
            usuario
        }
    }));



    console.log('Base de datos con informacion de prueba');
}