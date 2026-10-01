
const cep = document.querySelector('#cep');

cep.addEventListener('focusout', async (e) =>{
   e.preventDefault();
   try{
   const dados = await BuscaDados();
   console.log(dados);
   montaForm(dados);
    }catch(erro) {
     alert('ocorreu um problema')
   };
   async function BuscaDados(){
     const inputCEP =  document.getElementById('cep');
    const cepLimpo =  inputCEP.value.replace(/\D/g, '');
    const url =  `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const resposta = await fetch(url);
    return resposta.json();
   }
   function montaForm(dados){
   document.querySelector('#end').value = dados.logradouro;
   document.querySelector('#bairro').value = dados.bairro;
   document.querySelector('#city').value = dados.localidade;
   document.querySelector('#state').value =dados.uf;
   }
});