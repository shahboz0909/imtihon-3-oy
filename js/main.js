

// NONINI TANLASH
  let elPiText = document.querySelector(".result__textend")
  let elSelect = document.querySelector("#form__select")
  let selectOptionsValue = ['Yupqa',  'o\'rtacha', 'Qalin'];

  for (let i = 0; i < selectOptionsValue.length; i++) {
    let newElOption = document.createElement("option");
    elSelect.append(newElOption);
    newElOption.textContent = selectOptionsValue[i];

  elSelect.addEventListener('change', function (evt) {
    evt.preventDefault();
    elPiText.textContent = elSelect.value;
  });
  elSelect.appendChild(newElOption);
  newElOption.name = "selected"
}

elPiText.textContent = selectOptionsValue[0];
  

// PIZZA SIZE
let pizzaSizeRes = document.querySelector(".pizza-size-result")
let elPizzaSizeBox = document.querySelector(".pizza-size-box")
  let pitsaSize = ['25 cm ', '30 cm', '35 cm'];

  for (let i = 0; i < pitsaSize.length; i++) {
  var elInputRadio = document.createElement('input');
  var elLabel = document.createElement('label');
  elLabel.setAttribute("class", "fw-bold")

  // ADD CLASS
  elInputRadio.classList.add('form-check-input');
  elInputRadio.classList.add('pizzaSize-radio');
  elLabel.classList.add('radio-label');

  elInputRadio.value = pitsaSize[i];
  elInputRadio.type = 'radio';
  elInputRadio.name = 'radio';

  elInputRadio.id = pitsaSize[i];
  elLabel.setAttribute('for', pitsaSize[i]);
  elLabel.textContent = pitsaSize[i];

  pizzaSizeRes.textContent = pitsaSize[0];
  
  elPizzaSizeBox.append(elInputRadio);
  elPizzaSizeBox.append(elLabel);

    elInputRadio.addEventListener('change', function (evt) {
    evt.preventDefault();
    pizzaSizeRes.textContent = this.value;
  });
  }
  // PIZZA SIZE end




  // PITSA TURI
  let elulList = document.querySelector (".add-vegetables-list");
  let elUlList2 = document.querySelector (".ustida-list")
  let pizzaType = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
  let pizzaTypeResult = [];

  for (let i = 0; i < pizzaType.length; i++) {
        addTypeItem = document.createElement('li');       
        addTypeCheckbox = document.createElement('input');
        addTypeLabel = document.createElement('label');   

        addTypeItem.classList.add('addVegetables-item');  
        addTypeCheckbox.classList.add('form-check-input');    
        addTypeLabel.classList.add('addVegetables-label'); 
          
        addTypeCheckbox.id = pizzaType[i];
        addTypeLabel.setAttribute('for', pizzaType[i]);
        addTypeLabel.textContent = pizzaType[i];
        addTypeCheckbox.value = pizzaType[i];
        addTypeCheckbox.type = 'checkbox';
        addTypeCheckbox.name = 'input'

          
        elulList.append(addTypeItem);
        addTypeItem.append(addTypeCheckbox);
        addTypeItem.append(addTypeLabel);


                         // FUNCTION
  addTypeCheckbox.addEventListener('change', function (evt) {
    evt.preventDefault();
    if (pizzaTypeResult.includes(this.value)) {
      let index = pizzaTypeResult.indexOf(this.value);
      pizzaTypeResult.splice(index, 1);
    } else {
      pizzaTypeResult.push(this.value);
    }
    
    elUlList2.innerHTML = null;
    
    for (let i = 0; i < pizzaTypeResult.length; i++){
      let elUlItem = document.createElement('li');
      elUlItem.classList.add('add-list__item');
      elUlItem.textContent = pizzaTypeResult[i];
      elUlList2.appendChild(elUlItem);
    }
    
  });
  }

    let elAddLister = document.querySelector(".addbox__list");
    let elAddLIstRes = document.querySelector(".addending__texting")
  
    let addEndArrey = ['Achchiq', 'Sosiskali'];
    let addEndFree = [];

    for (let i = 0; i < addEndArrey.length; i++) {
      let addItem = document.createElement('li');
      let addInputCheckbox = document.createElement('input');
      let addtLabel = document.createElement("label");
      
      
      addInputCheckbox.id = addEndArrey[i];
      addtLabel.setAttribute('for', addEndArrey[i]);
      addInputCheckbox.value = addEndArrey[i];
      addtLabel.textContent = addEndArrey[i];
      addInputCheckbox.type = 'checkbox';
      addInputCheckbox.name = 'check'

      addItem.classList.add('addtionals-item');
      addtLabel.classList.add('addVegetables-label');
      addInputCheckbox.classList.add('form-check-input');
      
      addItem.appendChild(addInputCheckbox);
      addItem.appendChild(addtLabel);
      elAddLister.appendChild(addItem);
      

      addInputCheckbox.addEventListener('change', function(evt) {
        evt.preventDefault();
        
            if (addEndFree.includes(this.value)) {
              var index = addEndFree.indexOf(this.value);
              addEndFree.splice(index, 1);
            } else {
              addEndFree.push(this.value);
            };
            
            elAddLIstRes.innerHTML = null;

            for (var i = 0; i < addEndFree.length; i++){
                    var elAddEndNewItem = document.createElement('li');
                    elAddEndNewItem.classList.add('add-list__item');
                    elAddEndNewItem.textContent = addEndFree[i];
                    elAddLIstRes.append(elAddEndNewItem);
                  };
      });
    }


