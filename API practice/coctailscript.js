const itemFetch =  () =>{
    const nameItem = document.getElementById('search-field');
    const serachItem = nameItem.value;
    nameItem.value='';
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${serachItem}`;
    fetch(url)
   .then(res=>res.json())
   .then(data=>showItem(data.drinks))
   showSpinner('block');
   showContent('none')
  
    

}
function showContent (displayShow){
  document.getElementById('show').style.display=displayShow;
}
const showItem = (data) =>{
    
    const divField = document.getElementById('item-show');
    divField.textContent='';
    data.forEach(info=>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick=" " class="card" style="width: 18rem;">
    <img src="${info.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${info.strDrink}</h5>
      <p class="card-text">${info.strInstructionsDE?.slice(0,100)}</p>
     
    </div>
  </div>`
  
  divField.appendChild(div);
  
    });
    showSpinner('none');
 showContent('block')
   
}

function showSpinner (displayShow){
    document.getElementById('spinner').style.display=displayShow;
}
