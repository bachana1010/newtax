import requests


class currency_course:
    def get_response(self):
        return requests.get('https://any.ge/currency/api.php?info=yvela&fbclid=IwAR2oIXPWQoDNjVkj9zADQukl0HeA08WehIpN6MsH8OIMtBLFFBGnWukIvVU')

    def get_all_currencies(self):
        currencies_items = {}

        response = self.get_response()
        currencies = response.json()['currency']

        for item in currencies:
            currencies_items[item['cur_code']] = item['cur_value']

        return currencies_items

    def get_specific_currencies(self):
        currencies = self.get_all_currencies()
        main_dict = {}

        for currency_code, rate_valley in currencies.items():
            if currency_code == "USD":
                main_dict[currency_code] = rate_valley
            elif currency_code == "GBP":
                main_dict[currency_code] = rate_valley
            elif currency_code == "EUR":
                main_dict[currency_code] = rate_valley
            elif currency_code == "TRY":
                main_dict[currency_code] = rate_valley
            elif currency_code == "CHF":
                main_dict[currency_code] = rate_valley

        return main_dict
