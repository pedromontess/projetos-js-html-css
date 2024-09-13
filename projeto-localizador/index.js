alert("digite apenas os numeros do cep");
function descobrir() {
  let txt = document.getElementById("itxt").value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", `https://viacep.com.br/ws/${txt}/json/`);
  ajax.send();

  ajax.onload = function () {
    //transformei em obj
    let obj = JSON.parse(this.responseText);
    //peguei os obj que eu queria
    let log = obj.logradouro;
    let loc = obj.localidade;
    let bairro = obj.bairro;
    let compl = obj.complemento;
    //mandei mostrar como alerta
    alert(`${log} , ${loc} , ${bairro} , ${compl}`);
  };
  document.getElementById("itxt").value = "";
}

