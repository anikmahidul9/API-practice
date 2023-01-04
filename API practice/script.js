/* fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>res.json())
.then(data=>console.log(data)) */


const photos =async()=>{
    const url = 'https://jsonplaceholder.typicode.com/photos/?=50'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    showDetails(data)
    }

   photos();

const showDetails = (data) => {
     const divField = document.getElementById('card')
     data.forEach(info=>{
      
         const div = document.createElement('div')
         div.classList.add('card')
         div.innerHTML=`<div class="col">
         
         <img src="${info.thumbnailUrl}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${info.title}</h5>
         <p class="card-text"></p>
         </div>
         
         </div>
         `
         divField.appendChild(div);
      } )
    }