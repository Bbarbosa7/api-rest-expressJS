import Aluno from '../Model/Aluno';

class AlunoController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Brayann',
            sobrenome: 'Barbosa',
            email: 'teste@email.com',
            idade: 29,
            peso: 78,
            altura: 1.80
        });
        res.json(novoAluno);
    }
}

export default new AlunoController();