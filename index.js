let bill = $('.bill-input')
let numberOfPeople = $('.people-number-input')
let tipRates = $('.tip-rate')
let customTipRate = $('.custom-tip-rate')
let resetBtn = $('.reset-tip')
let numberOfPeopleError = $('.people-number-error')

let tipRate = 0;

// Outputs
let tipAmount = $('.tip-amnt')
let tipAmountTotal = $('.tip-amnt-total')


const billInput = () => {
    bill.on('input', (e) => {
        calculateTip()
    })
}

const selectTipRate = () => {
    tipRates.click((e) => {
        tipRates.removeAttr('style')
        customTipRate.val('')
        e.currentTarget.style.backgroundColor = 'hsl(172, 67%, 45%)'
        e.currentTarget.style.color = 'hsl(183, 100%, 15%)'
        e.currentTarget.style.fontWeight =  'bold'

        tipRate = e.target.classList[1].split('-')[1]
        calculateTip()
    })
}

const selectCustomTipRate = () => {
    customTipRate.click((e) => {
        tipRates.removeAttr('style')
    })

    customTipRate.on('input', (e) => {
        tipRate = e.target.value
        calculateTip()
    })
}

const chooseNumberOfPeople = () => {
    numberOfPeople.on('input', (e) => {
        
        if (e.target.value <= 0) {
            e.target.style.outlineColor = '#eb4d4b';
            numberOfPeopleError.show()
        } else {
            numberOfPeople.removeAttr('style')
            numberOfPeopleError.hide()
            calculateTip()

        }
    })
}

const calculateTip = () => {
    tipAmountTotal.html((bill.val() * tipRate / 100).toFixed(2))
    if (numberOfPeople.val() > 0) {
        tipAmount.html((tipAmountTotal.html() / numberOfPeople.val()).toFixed(2))
    } else {
        tipAmount.html('0.00')
    }
}

const resetCalc = () => {
    resetBtn.click((e) => {
        bill.val('')
        customTipRate.val('')
        numberOfPeople.val('')
        tipAmountTotal.html('0.00')
        tipAmount.html('0.00')
        tipRates.removeAttr('style')
    })
}

billInput()
selectTipRate()
selectCustomTipRate()
chooseNumberOfPeople()
resetCalc()
