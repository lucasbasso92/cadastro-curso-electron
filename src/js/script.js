console.log ("Meu arquivo script.js está funcionando!");

var form = document.querySelector("form-curso");
var meusCursos = [];




form.addEventListener("submit", function (event) {



event.preventDefault(); // Impede o reaload (carregamento) da página

var nomeDoCurso = document.querySelector("nomeCurso").value;
var cargaHoraria = document.querySelector("cargaHoraria").value;



var objetoCurso = {
    nome: nomeDoCurso,
    cargaHoraria: cargaCurso
};

meusCursos.push(objetoCurso);

console.log("Curso adicionado:", meusCursos);



});