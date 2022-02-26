var userBill = document.querySelector('#billAmount');
var userTip = document.querySelector('#serviceRate');
var userShareBill = document.querySelector('#shareBill');
var tipAmountTitle = document.querySelector('#tipTitle');
var tipAmount = document.querySelector('#tipAmount');
var tipEach = document.querySelector('#tipEach');
var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var userInfo = new CardInfo();
    var tip = calculateTip(userInfo);
    tipAmountTitle.classList.remove('hidden');
    tipAmount.classList.remove('hidden');
    console.log(tip.toFixed(2));
    tipAmount.textContent = (tip.toFixed(2) + "\u20AA");
});
var CardInfo = /** @class */ (function () {
    function CardInfo() {
        this.userBill = userBill.valueAsNumber;
        this.userTip = userTip.selectedIndex;
        this.userShareBill = userShareBill.valueAsNumber;
    }
    return CardInfo;
}());
function calculateTip(cardInfo) {
    validSharedBill(cardInfo);
    checkUserTip(cardInfo);
    var tip = (cardInfo.userBill * cardInfo.userTip) / cardInfo.userShareBill;
    return tip;
}
function checkUserTip(cardInfo) {
    if (cardInfo.userTip === 0) {
        return cardInfo.userTip = .05;
    }
    else if (cardInfo.userTip === 1) {
        return cardInfo.userTip = .1;
    }
    else if (cardInfo.userTip === 2) {
        return cardInfo.userTip = .15;
    }
    else if (cardInfo.userTip === 3) {
        return cardInfo.userTip = .2;
    }
}
function validSharedBill(cardInfo) {
    if (cardInfo.userShareBill === 0 || isNaN(cardInfo.userShareBill)) {
        removeShownAddHidden();
        return cardInfo.userShareBill = 1;
    }
    else if (cardInfo.userShareBill === 1) {
        removeShownAddHidden();
    }
    else {
        removeHiddenAddShown();
    }
}
function removeHiddenAddShown() {
    tipEach.classList.remove('hidden');
    tipEach.classList.add('shown');
}
function removeShownAddHidden() {
    tipEach.classList.remove('shown');
    tipEach.classList.add('hidden');
}
