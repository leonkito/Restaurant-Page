// idea for creating an object called food with a img scr, title and ingredients
const content = document.getElementById('content')
const Dish = (title,imgUrl,ingredients)=>{
    function createCard(divParent){
        const card = document.createElement('div');
        card.classList.add('item');
        const cardTitle = document.createElement('p')
        cardTitle.textContent = title;
        const cardImg = document.createElement('img')
        cardImg.setAttribute('src',imgUrl)
        const cardIngredients = document.createElement('p')
        cardIngredients.textContent = ingredients
        card.append(cardTitle,cardImg,cardIngredients)
        divParent.appendChild(card);
    }
    return{title,imgUrl,ingredients,createCard}
}

const crepioca = Dish("CREPIOCA  $12","img/crepioca.png","Tapioca, Eggs, Milk and cheese")
const broccoli = Dish("BRAISED BROCCOLI  $15","img/broccoli.png","Broccoli, Butter and Parmesian")
const spaghetti = Dish("WHITE SPAGHETTI $22","img/spaghetti.png","Spaghetti, Heavy Milk Cream, Butter and Lots of Parmesian")
const caipirinha = Dish("caipirinha $10","img/caipirinha.png","Brazilian Cachaça, Sugar and Lime")
const kiwi = Dish("Kiwi Caipirinha $10","img/kiwicapirinha.png","Vodka, cachaça, sugar and kiwi")
const mojito = Dish("mojito $10","img/mojito.png","ingredients for a mojito here")
const martini = Dish("Martini $10","img/martini.png","Dry martini")

let Drinks = [caipirinha,kiwi,mojito,martini]
let Menu = [broccoli,crepioca,spaghetti]

const food = document.getElementById('food')
const drink = document.getElementById('drink')
const home = document.getElementById('home')

let divButtons = [food,drink,home]

food.addEventListener('click', function (){clearContent(content);createContent(Menu);setClick(food,divButtons)});
drink.addEventListener('click', function (){clearContent(content);createContent(Drinks);setClick(drink,divButtons)});
home.addEventListener('click', function (){clearContent(content);setClick(home,divButtons)});
function setClick(element,arr){
    for(let item of arr){
        item.classList.remove("listClicked")
        item.classList.add("listUnClicked")
    }
    element.classList.add("listClicked")
    element.classList.remove("listUnClicked")
}

function clearContent(element){
    element.innerHTML=""
}
function createContent(arr){
    for(let item of arr){
        item.createCard(content)
    }
}

// Need to change color and background color of div buttons for menu,drinks and food
