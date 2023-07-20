
async function postUser(obj){
  try{
    let response = await axios.post("https://crudcrud.com/api/6bbf5e108b094953aa98b0ff7a671190/sellerData",obj);
    console.log(response);
    load();
  }catch (error){
    console.log(error);
  }
}

async function load(){
try{
  document.getElementById('Electronics').innerHTML="";
  document.getElementById('Skin-Care').innerHTML="";
  document.getElementById('Food').innerHTML="";
  let response = await axios.get("https://crudcrud.com/api/6bbf5e108b094953aa98b0ff7a671190/sellerData")
  console.log(response);
  for(var i=0; i<response.data.length;i++){
      showUser(response.data[i])
  }
  }catch (error){
  console.log(error);
}
}

window.addEventListener('DOMContentLoaded',load);

  
async function deleteUser(data2){
  try{
    let response = await axios.delete(`https://crudcrud.com/api/6bbf5e108b094953aa98b0ff7a671190/sellerData/${data2}`);
    console.log(`Deleted user with ID ${data2}`);
  }catch (error){
    console.log(error);
  }
}


function showUser(data1){

  let itemList1 = document.getElementById('Electronics');
  let itemList2 = document.getElementById('Skin-Care');
  let itemList3 = document.getElementById('Food');

  let li = document.createElement('li');
  li.className = 'list-group-item';
  
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'Delete';
  deleteBtn.onclick = removeItem;
  deleteBtn.appendChild(document.createTextNode('Delete'));
  
  li.appendChild(document.createTextNode("Price: "));
  li.appendChild(document.createTextNode(data1.price));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(", "));
  li.appendChild(document.createTextNode("Item-Name: "));
  li.appendChild(document.createTextNode(data1.name));
  li.appendChild(document.createTextNode(" "))
  li.appendChild(document.createTextNode(", "));
  li.appendChild(document.createTextNode("Category: "));
  li.appendChild(document.createTextNode(data1.cat));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(deleteBtn);
  
  if(data1.cat === 'Electronics'){
  
  itemList1.appendChild(li);
  
  }else if(data1.cat === 'Skin-Care'){

  itemList2.appendChild(li);
  
  }else if(data1.cat === 'Food'){

  itemList3.appendChild(li)
  
  };


  function removeItem(e){
  if(e.target.classList.contains('Delete')){
  if(confirm('Are You Sure You Want To Delete ?')){
      deleteUser(data1._id);
      let li = e.target.parentElement;
      if(data1.cat=='Electronics'){
      itemList1.removeChild(li);
      }else if(data1.cat == 'Skin-Care'){
        itemList2.removeChild(li);
      }else if(data1.cat == 'Food'){
        itemList3.removeChild(li);
      }
      
      var allInputs = document.querySelectorAll('input');
      allInputs.forEach(singleInput => singleInput.value = '');
      
  }
  }
  }

}

function test(){
  
  let price = document.getElementById('Price').value;
  let name = document.getElementById('Name').value;
  let cat = document.querySelector('select').value;

  obj = {
   price:price,
   name:name,
   cat:cat
  };
  
postUser(obj);
}










