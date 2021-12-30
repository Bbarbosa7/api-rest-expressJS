// sequelize, databaseConfig, Aluno
import sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../Model/Aluno";

//dentro desse array vão todos os models que existirem no projeto
const models = [Aluno];

const connection = new sequelize(databaseConfig);

models.forEach((model) => model.init(connection));