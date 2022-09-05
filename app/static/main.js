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

    });


}






//
const curr = () => {

    const gagzavna = document.querySelector(".i_calculation")
    const drop_currency = document.querySelector(".list_dropdown_currency")
    const fi_cur = document.querySelector(".finaly_result")
    const fir_inp = document.querySelector(".first_input")

    gagzavna.addEventListener("click",async function start(){
    const response = await fetch("http://127.0.0.1:8081/currency")
    const data = await response.json()

        const pay_tax = function(){
                    fi_cur.textContent = fin_result
                    fi_cur.style.backgroundColor = "yellowgreen"
        }
          const not_pay_tax = function(){
                    fi_cur.textContent = fin_result
                    fi_cur.style.backgroundColor = "red"
        }
        if( drop_currency.value == "USD"){
            fin_result = fir_inp.value * Number(data.currencies["USD"])
            if (fin_result <300){
                  pay_tax()

            }else{
                not_pay_tax()

            }
        }
        else if( drop_currency.value == "GBP" ){
            fin_result = fir_inp.value * Number(data.currencies["GBP"])
                if (fin_result <300){
                   pay_tax()

            }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "EUR"){
            fin_result = fir_inp.value * Number(data.currencies["EUR"])
                if (fin_result <300){
                  pay_tax()

              }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "TRY"){
            fin_result = fir_inp.value * Number(data.currencies["TRY"])
                if (fin_result <300){
                       pay_tax()

              }else{
                not_pay_tax()
            }
        }
        else if( drop_currency.value == "CHF"){
            fin_result = fir_inp.value * Number(data.currencies["CHF"])
                if (fin_result <300){
                   pay_tax()

              }
        else{
                not_pay_tax()
            }}

         })
    }




