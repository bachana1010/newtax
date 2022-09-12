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
    const land_btn = document.querySelector(".land_btn")
    const tax_land_input = document.querySelector(".tax_land_input").value
    const property_btn = document.querySelector(".property_btn")
    const landTax = document.querySelector(".land_tax_section")
    const propertyTax = document.querySelector(".property_tax_section")
    const alert_land = document.querySelector(".alert_land")
    const alert_property= document.querySelector(".alert_property")


    disable_sb_button()
    disable_land_property()
    disbale_property_property()
    disbale_vat()
    disbale_income()


    list_dropdown.addEventListener('click',
        function () {
            if (list_dropdown.value == "small") {
                click_small_bussiness()
            }
            else if (list_dropdown.value == "property"){
                click_property()
            }
            else if (list_dropdown.value == "Vat"){
                click_vat()
            }
            else if (list_dropdown.value == "income"){
                click_income()
            }


        });

    land_btn.addEventListener("click", function(){
        tax_land_input.value = " "
        landTax.style.display = "inline-block"
        propertyTax.style.display = "none"
        land_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        property_btn.style.background = "linear-gradient(135deg,  #485563,#2932,#7AA1D2 100%)"
        alert_property.style.display = "none"


    });

    property_btn.addEventListener("click", function(){
        tax_land_input.value = " "

        landTax.style.display = "none"
        propertyTax.style.display = "inline-block"
        property_btn.style.background = "linear-gradient(135deg,  #9796f0, #fbc7d4 100%)"
        land_btn.style.background = "linear-gradient(135deg,  #485563,#2932,#7AA1D2 100%)"
        alert_land.style.display = "none"

    });


}


const sb_api = () =>{

    const tax_first_input = document.querySelector(".tax_first_input").value
    const list_month = document.querySelector(".list_dropdown_month").value
    const tax_amount_small = document.querySelector(".tax_amount_value").value

    const alert = document.querySelector(".alert")
    const tax_first_input_value = document.querySelector(".tax_first_input")
    const tax_amount_small_value = document.querySelector(".tax_amount_value")
    const list_month_value = document.querySelector(".list_dropdown_month")
    tax_first_input_value.value = " "
    tax_amount_small_value.value = " "
    list_month_value.value = "January"
    alert.style.display = "inline-block"

    // if (tax_first_input_value.value || tax_amount_small_value.value == null){
    //     document.querySelector(".send_btn").disabled = true;
    //
    // } else{
    //             document.querySelector(".send_btn").disabled = true;
    //
    // }

       const data = {tax_first_input, list_month, tax_amount_small}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("/small_api", options)


   }
   const function_small = () => {
       const tax_first_input = document.querySelector(".tax_first_input")
       const tax_amount_small = document.querySelector(".tax_amount_value")
       const num_small = Number(tax_first_input.value)
       const result = num_small / 100


       tax_amount_small.value = result


   }

const Land_amount =() => {
     const tax_land_input = document.querySelector(".tax_land_input").value
    const land_label = document.querySelector(".label_tax_land")
    const list_city = document.querySelector(".list_dropdown_city").value

    if (list_city == "Kutaisi"){
        const num_land = Number(tax_land_input)
        const kutaisi_result = num_land * 71
        console.log(kutaisi_result)

        land_label.value = kutaisi_result

    }
    else if ( list_city == "Tbilisi"){
        const num_land = Number(tax_land_input)
        const tbilisi_result = num_land * 100
        console.log(tbilisi_result)

        land_label.value = tbilisi_result

    }
        else if ( list_city == "Batumi"){
        const num_land = Number(tax_land_input)
        const batumi_result = num_land * 94
        console.log(batumi_result)

        land_label.value = batumi_result

    }
        else if ( list_city == "Sokhum"){
        const num_land = Number(tax_land_input)
        const Sokhum_result = num_land * 94
        console.log(Sokhum_result)

        land_label.value = Sokhum_result

    }





}
const Property_api = () =>{

    const land_input = document.querySelector(".tax_land_input").value
    const list_year = document.querySelector(".list_dropdown_year").value
    const list_city = document.querySelector(".list_dropdown_city").value
    const land_label = document.querySelector(".label_tax_land").value
    const land_alert = document.querySelector(".alert_land")

    land_alert.style.display = "inline-block"

       const data = {land_input, list_year,list_city, land_label}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("/property_api", options)

    land_input.textContent=''
   }


   const property_amount = () => {
    const property_value_input = document.querySelector(".property_property_input1").value
    const land_label = document.querySelector(".label_tax_property")
    const num_property = Number(property_value_input)
     const prop_result = num_property * 20
       land_label.value = prop_result



   }

   const Property_property_api = () =>{

    const property_income_input = document.querySelector(".property_property_input").value
    const property_value_input = document.querySelector(".property_property_input1").value
    const list_year= document.querySelector(".list_dropdown_year").value
    const land_label1 = document.querySelector(".label_tax_property").value
     const property_alert = document.querySelector(".alert_property")


    property_alert.style.display = "inline-block"

       const data = {property_income_input, property_value_input,list_year, land_label1}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("http://127.0.0.1:2020/Property_property_api", options)
   }


      const vat_amount = () => {
    const vat_tax_amount = document.querySelector(".vat_first_input").value
    const last_vat_tax = document.querySelector(".vat_second_input").value
    const vat_label = document.querySelector(".label_tax_vat")
    const vat_amount = Number(vat_tax_amount)
    const last_vat_numb = Number(last_vat_tax)
    const result_vat_first = (vat_amount*18)/100
    const finaly_result = result_vat_first - last_vat_numb
          console.log(finaly_result)
       vat_label.value = finaly_result



   }

   const vat_api = () =>{

    const vat_tax_amount = document.querySelector(".vat_first_input").value
    const last_vat_tax = document.querySelector(".vat_second_input").value
    const vat_month = document.querySelector(".list_dropdown_month").value
    const vat_label = document.querySelector(".label_tax_vat").value
       const alert_vat = document.querySelector(".alert_vat")
           alert_vat.style.display = "inline-block"





       const data = {vat_tax_amount, last_vat_tax,vat_month, vat_label}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("http://127.0.0.1:2020/vat_tax_api", options)
   }


  const income_amount = () => {
    const income_gross = document.querySelector(".income_first_input").value
    const income_deductions = document.querySelector(".income_second_input").value
    const income_label = document.querySelector(".label_tax_income")
    const first = Number(income_gross)
    const second = Number(income_deductions)
    const result1 = first - second
    const result2 = (result1 *20)/100
       income_label.value = result2



   }

   const income_api = () =>{

       const income_gross = document.querySelector(".income_first_input").value
    const income_deductions = document.querySelector(".income_second_input").value
     const income_month = document.querySelector(".list_dropdown_month").value
    const income_label = document.querySelector(".label_tax_income").value

             const alert_income = document.querySelector(".alert_income")
           alert_income.style.display = "inline-block"



       const data = {income_gross, income_deductions,income_month, income_label}

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    };
    fetch("http://127.0.0.1:2020/income_tax_api", options)
   }

//



const curr = () => {

    const gagzavna = document.querySelector(".i_calculation")
    const drop_currency = document.querySelector(".list_dropdown_currency")
    const fi_cur = document.querySelector(".finaly_result")
    const fir_inp = document.querySelector(".first_input")

    gagzavna.addEventListener("click",async function start(){
    const response = await fetch("http://127.0.0.1:2020/currency")
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


// function dropdonw tax type section

const click_small_bussiness = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        small_bussines.style.display = "inline-block"
        propery_tax.style.display = "none"
        vat_tax.style.display = "none"
        income_tax.style.display = "none"
        clear_property_land()
        clear_property_property()
        clear_vat()
        clear_income()




}

const click_property = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")


        propery_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        vat_tax.style.display = "none"
        income_tax.style.display = "none"
        clear_small()
        clear_vat()
            clear_income()





}



const click_vat = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        vat_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        propery_tax.style.display = "none"
        income_tax.style.display = "none"
       clear_small()
         clear_property_property()
            clear_property_land()
        clear_income()


}

const click_income = () => {
        const small_bussines = document.querySelector(".small-business")
        const propery_tax = document.querySelector(".property_tax")
        const vat_tax = document.querySelector(".VatTaxSection")
        const income_tax = document.querySelector(".IncomeTaxSection")

        income_tax.style.display = "inline-block"
        small_bussines.style.display = "none"
        propery_tax.style.display = "none"
        vat_tax.style.display = "none"
           clear_small()
            clear_property_land()
        clear_property_property()
    clear_vat()

}

    // clear

const clear_small = () => {

        const alert = document.querySelector(".alert")
                    const tax_first_input_value = document.querySelector(".tax_first_input")
                    const tax_amount_small_value = document.querySelector(".tax_amount_value")
                    const list_month_value = document.querySelector(".list_dropdown_month")
                    tax_first_input_value.value = ""
                    tax_amount_small_value.value = ""
                    list_month_value.value = "January"
                    alert.style.display = "none"
}

const clear_property_land = () => {
        const alert = document.querySelector(".alert")
        const tax_land_input = document.querySelector(".tax_land_input")
        const list_year_land = document.querySelector(".list_dropdown_year")
        const list_city = document.querySelector(".list_dropdown_city")
        const land_label = document.querySelector(".label_tax_land")

        alert.style.display = "none"
        tax_land_input.value = ""
        list_year_land.value = "2022"
        list_city.value = "Kutaisi"
        land_label.value = ""
}

const clear_property_property = () => {
        const alert = document.querySelector(".alert")
        const property_value_input = document.querySelector(".property_property_input")
        const property_value_input1 = document.querySelector(".property_property_input1")
        const list_year_land = document.querySelector(".list_dropdown_year")
        const land_label = document.querySelector(".label_tax_property")

        alert.style.display = "none"
        property_value_input.value = ""
        property_value_input1.value = ""


        list_year_land.value = "2022"
        land_label.value = ""
}

const clear_vat =() => {
    const alert_vat = document.querySelector(".alert_vat")
    const vat_first_input = document.querySelector(".vat_first_input")
    const vat_second_input = document.querySelector(".vat_second_input")
    const vat_month = document.querySelector(".list_dropdown_month_vat")
    const vat_label = document.querySelector(".label_tax_vat")

    vat_first_input.value = ""
    vat_second_input.value = ""
    vat_month.value = "January"
    vat_label.value = ""

    alert_vat.style.display = "none"


}

const clear_income = () => {
    const alert_income = document.querySelector(".alert_income")
    const income_first_input = document.querySelector(".income_first_input")
    const income_second_input = document.querySelector(".income_second_input")
    const income_month = document.querySelector(".list_dropdown_month_income")
    const income_label = document.querySelector(".label_tax_income")

    income_first_input.value = ""
    income_second_input.value = ""
    income_month.value = "January"
    income_label.value = ""

    alert_income.style.display = "none"




}

const clear_information = () =>{
    clear_small()
    clear_property_land()
    clear_property_property()
    clear_vat()
    clear_income()
}




// disabled send button if input is empty


const disable_sb_button = () =>{
    const tax_first_input_value = document.querySelector(".tax_first_input")
    const button_sb = document.querySelector(".send_btn")

    tax_first_input_value.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        button_sb.disabled = false

        if (value === ""){
                    button_sb.disabled = true

        }
    })
}

const disable_land_property = () => {
    const tax_land_input = document.querySelector(".tax_land_input")
    const land_btn = document.querySelector(".send_land_btn")

      tax_land_input.addEventListener("keyup", (e) => {
        const value = e.currentTarget.value;
        land_btn.disabled = false

        if (value === ""){
                    land_btn.disabled = true

        }
    })
}


 const   disbale_property_property = () => {
    const property_1 = document.querySelector(".property_property_input")
    const property_2 = document.querySelector(".property_property_input1")
    const prop_btn = document.querySelector(".send_property_btn")

     let ar =[property_1,property_2]



   ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (property_1.value != "" && property_2.value != "") {
                prop_btn.disabled = false

            } else {
                prop_btn.disabled = true

            }
         })
    })
 };


 const  disbale_vat = () => {
    const vat1 = document.querySelector(".vat_first_input")
    const vat2 = document.querySelector(".vat_second_input")
    const vat_btn = document.querySelector(".send_vat_btn")

     let ar =[vat1,vat2]


   ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (vat1.value != "" && vat2.value != "") {
                vat_btn.disabled = false

            } else {
                vat_btn.disabled = true

            }
         })
    })

 };



 const  disbale_income = () => {
    const income1 = document.querySelector(".income_first_input")
    const income2 = document.querySelector(".income_second_input")
    const income_btn = document.querySelector(".send_income_btn")

     let ar =[income1,income2]


    ar.forEach(function(elem){
         elem.addEventListener("mouseout",(e) => {
             if (income1.value != "" && income2.value != "") {
                income_btn.disabled = false

            } else {
                income_btn.disabled = true

            }
         })
    })


 }