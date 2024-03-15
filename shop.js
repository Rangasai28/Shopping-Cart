let del = document.querySelectorAll('#delete');
// console.log(del);

// for(let element of del){
//   element.addEventListener('click',function(event){
//     let ce = event.target;
//     let li1 = ce.parentElement;
//     // console.log(li1);
//     li1.remove();
//   })
// }


//Deleting the Items.
let list = document.querySelector('#list');
list.addEventListener('click',function(event){
    let ce = event.target;
    let li1 = ce.parentElement;
       //console.log(li1);
    li1.remove();
});

// let addit = document.getElementById('addIt');
// let itemt = addit.value; 
//     console.log(addit);
//Adding Items to the List
let additem = document.querySelector("#add-button");
// console.log(additem);

additem.addEventListener('click',function(){
    let addit = document.getElementById('addIt');
    let itemt = addit.value; 
    // console.log(list);
    // console.log(lifiElement);
    let newl = document.createElement('li');
    let spanElement1 = document.createElement('span');
    let spanElement2 = document.createElement('span');
     spanElement1.id="item";
    spanElement2.id="delete";
     spanElement1.textContent = itemt;
     spanElement2.textContent = 'Delete';
     newl.appendChild(spanElement1);
     newl.appendChild(spanElement2);
     list.appendChild(newl);
    addit.value=" ";
    // spanElement1.textContent = itemt;
    //  spanElement2.textContent = 'Delete';
    // newl.appendChild(spanElement1);
    // newl.appendChild(spanElement2);
    // list.appendChild(newl);
    // addit.value=" ";
    // console.log(list);

});

let search = document.querySelector('#search');
// console.log(search);

search.addEventListener('keyup',function(e){
    let st = e.target.value;
    let it = document.getElementsByTagName('li');
    let ite = Array.from(it);

    ite.forEach((liitem) =>{
       let ligritem = liitem.firstElementChild.textContent;
       console.log(ligritem);
    //    console.log(st);
       if(ligritem.includes(st)){
          liitem.style.display = 'block';
          console.log(liitem);
       }else{
        liitem.style.display = 'none';
       }
    });
});

//Hide The List
let hide = document.getElementById('Hide List-Items');
hide.addEventListener('change',function(event){
     let gritems = document.getElementById('grocery-items');
     gritems.style.display = 'block';
     if(hide.checked){
        gritems.style.display = 'none';
     }
});

