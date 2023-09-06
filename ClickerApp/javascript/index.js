var money = 0;
let raise = 1;
let raisePS = 0;

let priceDealer = 10;
let priceFarm = 100;
let priceDrugdog = 500;

let countDealer = 0;
let countFarm = 0;
let countDrugDog = 0;

window.onload = function() {
    document.getElementById('blunts').innerHTML = money;

    document.getElementById('dealerPrice').innerHTML = priceDealer;
    document.getElementById('farmPrice').innerHTML = priceFarm;
    document.getElementById('drugDogPrice').innerHTML = priceDrugdog;

    document.getElementById('dealerCount').innerHTML = countDealer;
    document.getElementById('farmCount').innerHTML = countFarm;
    document.getElementById('drugDogCount').innerHTML = countDrugDog;
    checkMoney();
    startCounter();
}

function clickWeed() {  //Function when the weed is clicked - raises money
    money = money + raise;
    document.getElementById('blunts').innerHTML = money;
    checkMoney();
}

function startCounter() {   //Conts up money every second
    setInterval(() => {
        money = money + raisePS;
        checkMoney();
    }, 1000);
}

function checkMoney() {
    checkDealer();
    checkFarm();
    checkDrugDog();
    document.getElementById('blunts').innerHTML = money;
}

function buyDealer() {
    money = money - priceDealer;
    countDealer++;
    priceDealer++;
    raisePS = raisePS + 0.2;
    document.getElementById('dealerPrice').innerHTML = priceDealer;
    document.getElementById('dealerCount').innerHTML = countDealer;
    checkMoney();
}

function buyFarm() {
    money = money - priceFarm;
    countFarm++;
    priceFarm = priceFarm + 11;
    raisePS = raisePS + 1.1;
    document.getElementById('farmPrice').innerHTML = priceFarm;
    document.getElementById('farmCount').innerHTML = countFarm;
    checkMoney();
}

function buyDrugDog() {
    money = money - priceDrugdog;
    countDrugDog++;
    priceDrugdog = priceDrugdog + 50;
    raisePS = raisePS + 4;
    document.getElementById('drugDogPrice').innerHTML = priceDrugdog;
    document.getElementById('drugDogCount').innerHTML = countDrugDog;
    checkMoney();
}

function checkDealer() {
    if (money >= priceDealer) {
        document.getElementById('dealerButton').disabled = false;
    }else{
        document.getElementById('dealerButton').disabled = true;
    }
}
function checkFarm() {
    if (money >= priceFarm) {
        document.getElementById('farmButton').disabled = false;
    }else{
        document.getElementById('farmButton').disabled = true;
    }
}
function checkDrugDog() {
    if (money >= priceDrugdog) {
        document.getElementById('drugDogButton').disabled = false;
    }else{
        document.getElementById('drugDogButton').disabled = true;
    }
}