let usuario = {
  nome: "",
  email: "",
  idade: 0,
};
let pesquisa = "";
let encontrouUsuario = false;

console.log("Digite o nome: ");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!usuario.nome) {
    usuario.nome = entrada_usuario;
    console.log("Digite o email: ");
  } else if (!usuario.email) {
    usuario.email = entrada_usuario;
    console.log("Digite a idade: ");
  } else if (!usuario.idade) {
    usuario.idade = Number(entrada_usuario);
    console.log("Qual email você quer achar? ");
  } else if (!pesquisa) {
    pesquisa = entrada_usuario;

    if (usuario.email === pesquisa) {
      console.log("Usuário presente");
    } else {
      console.log("Usuário ausente");
    }
    process.exit();
  }
});
