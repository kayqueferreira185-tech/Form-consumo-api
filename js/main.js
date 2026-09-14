
const formulario = document.querySelector('.formulario');

formulario.addEventListener('focusout', async (e) =>{
   e.preventDefault();
   const dados = await BuscaDados();
   console.log(dados);
   async function BuscaDados(){
     const inputCEP =  document.getElementById('cep');
    const cepLimpo =  inputCEP.value.replace(/\D/g, '');
    const url =  `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const resposta = await fetch(url);
    return resposta.json();
   }
});