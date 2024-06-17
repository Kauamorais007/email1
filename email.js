let usuario = {
    nome: '',
    email: '',
    idade: 0
};
let pesquisa ='';
console.log('Digite o nome: ');

process.stdin.on('data', function (data) {
    let entrada_usuario = data.toString().trim();

    if (!usuario.nome) {
        usuario.nome = entrada_usuario;
        console.log('Digite o email: ');
    } else if (!usuario.email) {
        usuario.email = entrada_usuario;
        console.log('Digite a idade: ');
    } else if (!usuario.idade) {
        usuario.idade = Number(entrada_usuario);
        console.log('Qual email voce quer achar ?')
    } else if (!pesquisa){
        pesquisa = entrada_usuario;
        for (let i = 0; i < usuario.email.length; i++) {
            if (entrada_usuario == usuario.email){
                console.log('Usuario presente');
            } else {
                console.log('Usuario ausente')
                break;
            }
    }
}
});
