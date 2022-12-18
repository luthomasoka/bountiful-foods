const requestURL = 'json/fruit.json';
let first = document.querySelector('#firstfruit');
let second = document.querySelector('#secondfruit');
let third = document.querySelector('#thirdfruit');

const drink = document.querySelector('#mydrink');
const fname = document.querySelector('#fname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const instructions = document.querySelector('#instructions');

const orderHead = document.querySelector('#my-order');
const container = document.querySelector('.display-drink');

let fruitList = [];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    displayFruits(jsonObject);
  });

  function createGroups(arr, numGroups) {
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(numGroups)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  function displayFruits(fruits) {

    fruitList = fruits;
    fruitArrays = (createGroups(fruits, 3));

    for (let arr = 0; arr < fruitArrays.length; arr++) {
      for (let i = 0; i < fruitArrays[arr].length; i++) {
        if (arr === 0) {
          let option = document.createElement('option');
          option.innerHTML = fruitArrays[0][i].name;
          option.setAttribute('value', fruitArrays[0][i].name);
          first.appendChild(option);
        }
        else if (arr === 1) {
          let option = document.createElement('option');
          option.innerHTML = fruitArrays[1][i].name;
          option.setAttribute('value', fruitArrays[1][i].name);
          second.appendChild(option);
        }
        else if (arr === 2) {
          let option = document.createElement('option');
          option.innerHTML = fruitArrays[2][i].name;
          option.setAttribute('value', fruitArrays[2][i].name);
          third.appendChild(option);
        }
      }
    }

    console.log(first.value);
  }

    drink.addEventListener('click', (e) => {
      e.preventDefault();

      console.log(fname.value);
      console.log(phone.value);
      console.log(email.value);
      console.log(first.value);
      console.log(second.value);
      console.log(third.value);
      if (fname.value !== "" && phone.value !== "" && email.value !== "" && first.value !== "" && second.value !== "" && third.value !== "") {
          orderHead.textContent = "My Order"

          const current = new Date();
          const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

          let pdetails = document.createElement('h2');
          let dateTag = document.createElement('span');
          let fullName = document.createElement('span');
          let phoneNum = document.createElement('span');
          let mail = document.createElement('span');
          let drink = document.createElement('h2');
        
          let firstFruit = document.createElement('span');
          let secondFruit = document.createElement('span');
          let thirdFruit = document.createElement('span');

          let carbohydrates = document.createElement('span');
          let proteins = document.createElement('span');
          let fats = document.createElement('span');
          let sugars = document.createElement('span');
          let cals = document.createElement('span');
          
          let perSection = document.createElement('div');
          let drinkSection = document.createElement('div');

          let carbs = 0;
          let protein = 0;
          let fat = 0;
          let sugar = 0;
          let cal = 0;

          dateTag.textContent = date;
          pdetails.textContent = 'Personal Details';
          fullName.textContent = `First Name: ${fname.value}`;
          fullName.setAttribute('class', fname.value);
          phoneNum.textContent = `Phone: ${phone.value}`;
          phoneNum.setAttribute('class', phone.value);
          mail.textContent = `Email: ${email.value}`;
          mail.setAttribute('class', email.value);

          fruitList.forEach((fruitObj) => {
            if (fruitObj.name === first.value) {
                carbs += fruitObj.nutritions.carbohydrates;
                protein += fruitObj.nutritions.protein;
                fat += fruitObj.nutritions.fat;
                sugar += fruitObj.nutritions.sugar;
                cal += fruitObj.nutritions.calories;
            }
            else if (fruitObj.name === second.value) {
              carbs += fruitObj.nutritions.carbohydrates;
              protein += fruitObj.nutritions.protein;
              fat += fruitObj.nutritions.fat;
              sugar += fruitObj.nutritions.sugar;
              cal += fruitObj.nutritions.calories;
            }
            else if (fruitObj.name === third.value) {
              carbs += fruitObj.nutritions.carbohydrates;
              protein += fruitObj.nutritions.protein;
              fat += fruitObj.nutritions.fat;
              sugar += fruitObj.nutritions.sugar;
              cal += fruitObj.nutritions.calories;
            }
          });

          drink.textContent = 'My Order';
          firstFruit.textContent = `First-Fruit: ${first.value}`;
          firstFruit.setAttribute('class', first.value);
          secondFruit.textContent = `Second-Fruit: ${second.value}`;
          secondFruit.setAttribute('class', second.value);
          thirdFruit.textContent = `Third-Fruit: ${third.value}`;
          thirdFruit.setAttribute('class', third.value);
          carbohydrates.textContent = `Carbohydrates: ${carbs.toFixed(2)}`;
          carbohydrates.setAttribute('class', carbs.toFixed(2));
          proteins.textContent = `Protein: ${protein.toFixed(2)}`;
          proteins.setAttribute('class', protein.toFixed(2));
          fats.textContent = `Fat: ${fat.toFixed(2)}`;
          fats.setAttribute('class', fat.toFixed(2));
          sugars.textContent = `Sugar: ${sugar.toFixed(2)}`;
          sugars.setAttribute('class', sugar.toFixed(2));
          cals.textContent = `Calories: ${cal.toFixed(2)}`;
          cals.setAttribute('class', cal.toFixed(2));

          perSection.appendChild(pdetails);
          perSection.appendChild(dateTag);
          perSection.appendChild(fullName);
          perSection.appendChild(phoneNum);
          perSection.appendChild(mail);

          drinkSection.appendChild(drink);
          drinkSection.appendChild(firstFruit);
          drinkSection.appendChild(secondFruit);
          drinkSection.appendChild(thirdFruit);
          drinkSection.appendChild(carbohydrates);
          drinkSection.appendChild(proteins);
          drinkSection.appendChild(fats);
          drinkSection.appendChild(sugars);
          drinkSection.appendChild(cals);

          container.appendChild(perSection);
          container.appendChild(drinkSection);
      }
    })
