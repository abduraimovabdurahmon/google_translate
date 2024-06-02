async function translate(text, from, to) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(
      text
    )}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Tarjimani olib bo‘lmadi");
    }

    const json = await response.json();

    if (
      Array.isArray(json) &&
      Array.isArray(json[0]) &&
      Array.isArray(json[0][0])
    ) {
      const translated = json[0].map((item) => item[0]).join("");
      return translated;
    } else {
      throw new Error("Translation API’dan kutilmagan javob formati");
    }
  } catch (error) {
    console.error("Tarjimon xatosi: ", error);
    return "";
  }
}
