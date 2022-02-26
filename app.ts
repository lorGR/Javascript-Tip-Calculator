const userBill:HTMLInputElement = document.querySelector('#billAmount')

const userTip:HTMLSelectElement = document.querySelector('#serviceRate')

const userShareBill:HTMLInputElement = document.querySelector('#shareBill')

const tipAmountTitle:HTMLHeadingElement = document.querySelector('#tipTitle')
const tipAmount:HTMLParagraphElement = document.querySelector('#tipAmount')
const tipEach:HTMLParagraphElement = document.querySelector('#tipEach')

const form:HTMLFormElement = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInfo:CardInfo = new CardInfo()
    const tip = calculateTip(userInfo)
    tipAmountTitle.classList.remove('hidden')
    tipAmount.classList.remove('hidden')
    console.log(tip.toFixed(2))
    tipAmount.textContent = (`${tip.toFixed(2)}₪`)
})

class CardInfo {
    userBill: number
    userTip: number
    userShareBill: number
    constructor(){
        this.userBill = userBill.valueAsNumber
        this.userTip = userTip.selectedIndex
        this.userShareBill = userShareBill.valueAsNumber
    }
}

function calculateTip(cardInfo:CardInfo):number {
    validSharedBill(cardInfo)
    checkUserTip(cardInfo)
    const tip:number = (cardInfo.userBill * cardInfo.userTip) / cardInfo.userShareBill
    return tip
}

function checkUserTip(cardInfo:CardInfo):number{
    if(cardInfo.userTip === 0){
        return cardInfo.userTip = .05
    }else if(cardInfo.userTip === 1){
        return cardInfo.userTip = .1
    }
    else if(cardInfo.userTip === 2){
        return cardInfo.userTip = .15
    }
    else if(cardInfo.userTip === 3){
        return cardInfo.userTip = .2
    }
}

function validSharedBill(cardInfo:CardInfo):number{
    if(cardInfo.userShareBill === 0 || isNaN(cardInfo.userShareBill)){
        removeShownAddHidden()
        return cardInfo.userShareBill = 1
    }
    else if(cardInfo.userShareBill === 1){
        removeShownAddHidden()
    }
    else{
        removeHiddenAddShown()
    }
}

function removeHiddenAddShown(){
    tipEach.classList.remove('hidden')
    tipEach.classList.add('shown')
}

function removeShownAddHidden(){
    tipEach.classList.remove('shown')
    tipEach.classList.add('hidden')
}

