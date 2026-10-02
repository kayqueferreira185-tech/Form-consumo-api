
const cep = document.querySelector('#cep');

const erroCep = document.querySelector('#erro-cep');
const mensagemErro = document.querySelector('#mensagem-erro');


cep.addEventListener('focusout', async (e) =>{
   e.preventDefault();
   try{
   const dados = await BuscaDados();

   if(dados.erro === 'true'){
      throw new Error('CEP não encontrado');
   }
   montaForm(dados);
    }catch(erro) {
    erroCep.style.display = 'flex';
    mensagemErro.textContent = erro.message;
   };
   async function BuscaDados(){
    const cepLimpo =  cep.value.replace(/\D/g, '');
    if(cepLimpo.length !== 8 ){
      throw new Error('Digite um CEP válido.')
    }
    const url =  `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const resposta = await fetch(url);
    if(!resposta.ok){
      throw new Error('Tente novamente.')
    }
    return resposta.json();
   }
   function montaForm(dados){
   document.querySelector('#end').value = dados.logradouro;
   document.querySelector('#bairro').value = dados.bairro;
   document.querySelector('#city').value = dados.localidade;
   document.querySelector('#state').value =dados.uf;
   erroCep.style.display = "none";
   }
});