import requests

def translate(text, from_lang, to_lang):
    try:
        url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl={from_lang}&tl={to_lang}&dt=t&q={requests.utils.quote(text)}'

        response = requests.get(url)

        if not response.ok:
            raise Exception("Tarjimani olib bo‘lmadi")

        json = response.json()

        if isinstance(json, list) and isinstance(json[0], list) and isinstance(json[0][0], list):
            translated = ''.join(item[0] for item in json[0])
            return translated
        else:
            raise Exception("Translation API’dan kutilmagan javob formati")
    except Exception as error:
        print("Tarjimon xatosi: ", error)
        return ""
