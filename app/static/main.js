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
    const list_dropdown = document.querySelector('.list_dropdown')
    const btn_send = document.querySelector(".send_btn")

    const propery_tax = document.querySelector(".property_tax")
    const small_bussines = document.querySelector(".small-business")

    const land_btn = document.querySelector(".land_btn")
    const property_btn = document.querySelector(".property_btn")
    const landTax = document.querySelector(".land_tax_section")
    const propertyTax = document.querySelector(".property_tax_section")

    const vat_tax = document.querySelector(".VatTaxSection")
    const income_tax = document.querySelector(".IncomeTaxSection")

    list_dropdown.addEventListener('click',
        function () {
            if (list_dropdown.value == "small") {
                small_bussines.style.display = "inline-block"
                propery_tax.style.display = "none"
                vat_tax.style.display = "none"
                income_tax.style.display = "none"
            }
            else if (list_dropdown.value == "property"){
                propery_tax.style.display = "inline-block"
                small_bussines.style.display = "none"
                vat_tax.style.display = "none"
                income_tax.style.display = "none"


            }
            else if (list_dropdown.value == "Vat"){
                vat_tax.style.display = "inline-block"
                small_bussines.style.display = "none"
                propery_tax.style.display = "none"
                income_tax.style.display = "none"


            }
            else if (list_dropdown.value == "income"){
                income_tax.style.display = "inline-block"
                small_bussines.style.display = "none"
                propery_tax.style.display = "none"
                vat_tax.style.display = "none"



            }

                btn_send.addEventListener("click", function () {
                    console.log(console.log(list_dropdown.value)
                    )
                })
        });

    land_btn.addEventListener("click", function(){
        landTax.style.display = "inline-block"
        propertyTax.style.display = "none"
        land_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        property_btn.style.background = "linear-gradient(135deg,  #485563,#2932,#7AA1D2 100%)"
    });

    property_btn.addEventListener("click", function(){
        landTax.style.display = "none"
        propertyTax.style.display = "inline-block"
        property_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        land_btn.style.background = "linear-gradient(135deg,  #485563,#2932,#7AA1D2 100%)"

    })


}


// const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');



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



