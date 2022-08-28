// calculator dom

const calculatorInit = () => {
    const btn_vat = document.querySelectorAll(".btn-secondary")[0]
    const btn_income = document.querySelectorAll(".btn-secondary")[1]
    const btn_property = document.querySelectorAll(".btn-secondary")[2]
    const btn_profit = document.querySelectorAll(".btn-secondary")[3]

    const tax_result = document.querySelector(".result")
    const first_input = document.querySelector(".first_input")
    const reset = document.querySelector('.reset_reset')


    btn_vat.addEventListener('click', function () {
        console.log(9)
        let tax_input = first_input.value
        let numb = Number(tax_input)
        let vat_formulas = (numb * 18) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${vat_formulas}ლ`
        }

    })


    btn_income.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let vat_formulas = (numb * 18) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${vat_formulas}ლ`
        }

    })


    btn_income.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let income_formulas = (numb * 20) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${income_formulas}ლ`
        }

    })


    btn_property.addEventListener('click', function () {

        let tax_input = first_input.value
        let numb = Number(tax_input)
        let property_formulas = (numb * 1) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${property_formulas}ლ`
        }

    })

    btn_profit.addEventListener('click', function () {
        let tax_input = first_input.value

        let numb = Number(tax_input)
        let profit_formulas = ((numb / 0.85) * 15) / 100

        if (tax_input != "" & typeof (numb) == 'number') {
            tax_result.textContent = `${profit_formulas}ლ`
        }

    })

    reset.addEventListener("click", function () {
            first_input.value = null;
            tax_result.textContent = 0
        }
    )
}

//

// declaration dom
const smallBusinessDeclaration = () => {
    const wel = document.querySelector('.list_dropdown')
    const month_dropdown = document.querySelector(".list_dropdown_month")
    const first_input = document.querySelector(".tax_first_input")
    const tax_amount = document.querySelector(".tax_amount")
    const tax_value = document.querySelector('.tax_amount_value')
    const btn_send = document.querySelector(".send_btn")

    wel.addEventListener('click',
        function () {

            if (wel.value != "small") {
                console.log(wel.value)
                month_dropdown.style.display = 'none'
                first_input.style.display = 'none'
                tax_amount.style.display = 'none'
                tax_value.style.display = 'none'
                btn_send.style.display = 'none'
            } else {
                month_dropdown.style.display = 'inline-block'
                first_input.style.display = 'inline-block'
                tax_amount.style.display = 'inline-block'
                tax_value.style.display = 'inline-block'
                btn_send.style.display = 'inline-block'

                btn_send.addEventListener("click", function () {
                    console.log(console.log(wel.value)
                    )
                })
            }
        });
}


// const first_button = document.querySelector(".api_btn")
//
// first_button.addEventListener("click",function (){
//     const first_value = document.querySelector(".tax_first_input").value
//     saveScore(first_value)
//
// })

// const saveScore = (first) => {
//     let data = new FormData()
//
//     data.append('player1_name', first)
//
//     // data.append('player1', second)
//
//     let request = new XMLHttpRequest();
//     request.open("POST", "http://127.0.0.1:8080/ragac");
//     // request.setRequestHeader('accept','application/json')
//     // request.setRequestHeader('Content-Type','application/json')
//
//     request.send(data);
//     request.onload = () =>{
//         console.log(request);
//         console.log(request.response)
//
//
//     }
// }



