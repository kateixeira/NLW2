//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Executar uma ação

function cloneField(){
    //Duplicar os campos
   //que campo????
 const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
   //pegando campo e suplicando

   //limpar os campos depois que duplica
const fields = newFieldContainer.querySelectorAll('input') 
      
      //para cada campo limpar 
      fields.forEach(function(field){
          field.value = ""
          
      })
    //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}