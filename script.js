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

const crepioca = Dish("crepioca","img/broccoli.png","eggs,milk")
const broccoli = Dish("Rosted Broccoli","img/broccoli.png","Broccoli, butter and parmesian")

let Menu = [broccoli,crepioca,crepioca,crepioca]

for(let item of Menu){
    item.createCard(content)
}