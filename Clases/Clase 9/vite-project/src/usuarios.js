export async function obtenerUsuarios() {
  const datos = {
    results: [
      {
        "gender": "male",
        "name": { "title": "Mr", "first": "Karl-Friedrich", "last": "Kammerer" },
        "location": {
          "street": { "number": 929, "name": "Im Winkel" },
          "city": "Blaustein",
          "state": "Berlin",
          "country": "Germany",
          "postcode": 90894,
          "coordinates": { "latitude": "-48.6353", "longitude": "-116.0582" },
          "timezone": { "offset": "+1:00", "description": "Brussels, Copenhagen, Madrid, Paris" }
        },
        "email": "karl-friedrich.kammerer@example.com",
        "login": {
          "uuid": "9671612e-d312-4bf9-8028-5092b49fdcab",
          "username": "blacklion406",
          "password": "1983",
          "salt": "ZmgkR9MY",
          "md5": "331f16c0e717c5f407c72b4e76edde88",
          "sha1": "09f18bd3da29d3bfd21dfeb1bb9041cf7427415e",
          "sha256": "fac91c9eaef5e1fb0357069a51bf8cb1c4a74dc7ac4df3144f9b345340568e3e"
        },
        "dob": { "date": "1946-04-11T05:57:36.820Z", "age": 79 },
        "registered": { "date": "2014-04-06T06:08:55.020Z", "age": 11 },
        "phone": "0625-9886797",
        "cell": "0179-2993728",
        "id": { "name": "SVNR", "value": "23 100446 K 495" },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/14.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
        },
        "nat": "DE"
      },
      {
        "gender": "female",
        "name": { "title": "Miss", "first": "Louane", "last": "Rousseau" },
        "location": {
          "street": { "number": 4110, "name": "Avenue Goerges Clémenceau" },
          "city": "Fort-de-France",
          "state": "Haute-Corse",
          "country": "France",
          "postcode": 16810,
          "coordinates": { "latitude": "75.1057", "longitude": "77.3500" },
          "timezone": { "offset": "+7:00", "description": "Bangkok, Hanoi, Jakarta" }
        },
        "email": "louane.rousseau@example.com",
        "login": {
          "uuid": "e4ee4b3d-4f96-4c9e-9c61-55105521e562",
          "username": "orangetiger596",
          "password": "brian",
          "salt": "dxvjh4vy",
          "md5": "2452159c2122866e4a34cbf7187c1300",
          "sha1": "7dc5bb9a59b7e2f07e021e043cfad8bcfca9d228",
          "sha256": "b2a7f10494a22ac47f1073005f71ce93e8552d589ecbe42e700e12471588e07a"
        },
        "dob": { "date": "1958-12-11T07:09:11.092Z", "age": 66 },
        "registered": { "date": "2022-01-19T06:42:09.715Z", "age": 3 },
        "phone": "03-23-22-60-35",
        "cell": "06-70-78-20-50",
        "id": { "name": "INSEE", "value": "2581168496323 80" },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/76.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
        },
        "nat": "FR"
      },
      {
        "gender": "male",
        "name": { "title": "Mr", "first": "Edelbert", "last": "Mau" },
        "location": {
          "street": { "number": 3504, "name": "Jahnstraße" },
          "city": "Wanzleben-Börde",
          "state": "Hessen",
          "country": "Germany",
          "postcode": 93798,
          "coordinates": { "latitude": "5.5234", "longitude": "146.4393" },
          "timezone": { "offset": "-7:00", "description": "Mountain Time (US & Canada)" }
        },
        "email": "edelbert.mau@example.com",
        "login": {
          "uuid": "84fc7463-3905-48c1-bd41-80ad6f954636",
          "username": "angrypeacock108",
          "password": "banane",
          "salt": "jO5EcYS9",
          "md5": "285375b43a25e1e9ecb0db111d5b7381",
          "sha1": "1b3ad5d35f876982f79d75f0a867b95b3f33ee00",
          "sha256": "2b642776a2dac01d77c4bbb7af841b29d525151e32b27e3009cea691a2c7f616"
        },
        "dob": { "date": "1985-04-25T05:25:32.596Z", "age": 40 },
        "registered": { "date": "2012-05-01T09:54:55.215Z", "age": 13 },
        "phone": "0957-0034283",
        "cell": "0171-7950550",
        "id": { "name": "SVNR", "value": "71 240485 M 056" },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/20.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
        },
        "nat": "DE"
      },
      {
        "gender": "female",
        "name": { "title": "Mrs", "first": "Nataša", "last": "Gojković" },
        "location": {
          "street": { "number": 2175, "name": "Siniše Nikolajevića" },
          "city": "Zvečan",
          "state": "Jablanica",
          "country": "Serbia",
          "postcode": 34619,
          "coordinates": { "latitude": "-52.7131", "longitude": "25.6032" },
          "timezone": { "offset": "+8:00", "description": "Beijing, Perth, Singapore, Hong Kong" }
        },
        "email": "natasa.gojkovic@example.com",
        "login": {
          "uuid": "257e6e2a-e70d-4bf1-8c0b-83e8b10473e5",
          "username": "beautifulgorilla813",
          "password": "13131313",
          "salt": "l1KNfLM6",
          "md5": "8f10665d759ed772ded3d3874237216e",
          "sha1": "8d37372c818b01d0ac462b7eb8fe9774aba1acd0",
          "sha256": "95d179eea27b8e022f59dbfe1980eead59b239447ddf2d4d3284d227def23b72"
        },
        "dob": { "date": "2001-04-28T23:36:13.896Z", "age": 24 },
        "registered": { "date": "2015-11-09T23:48:27.851Z", "age": 9 },
        "phone": "027-4867-236",
        "cell": "064-1289-026",
        "id": { "name": "SID", "value": "298316068" },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/73.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
        },
        "nat": "RS"
      },
      {
        "gender": "female",
        "name": { "title": "Mrs", "first": "Felícia", "last": "Barros" },
        "location": {
          "street": { "number": 9115, "name": "Rua Vinte de Setembro" },
          "city": "Patos de Minas",
          "state": "Rondônia",
          "country": "Brazil",
          "postcode": 41743,
          "coordinates": { "latitude": "-57.3666", "longitude": "87.8088" },
          "timezone": { "offset": "-7:00", "description": "Mountain Time (US & Canada)" }
        },
        "email": "felicia.barros@example.com",
        "login": {
          "uuid": "e91880d1-adda-427d-bcf2-42d9a199e016",
          "username": "beautifulladybug877",
          "password": "mathew",
          "salt": "LHpbMi0S",
          "md5": "2ef655bec196c3a344abc4e148b2353c",
          "sha1": "71657f227cdbbd27bee2e255c5cc31575276f2ee",
          "sha256": "516162663c607feebf89e82a45c2354170abd3563ddd69060fe0ffa3f79b8028"
        },
        "dob": { "date": "1978-12-18T11:38:33.255Z", "age": 46 },
        "registered": { "date": "2008-01-28T02:05:57.295Z", "age": 17 },
        "phone": "(52) 8145-9993",
        "cell": "(25) 1046-9781",
        "id": { "name": "CPF", "value": "707.590.003-41" },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/4.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
        },
        "nat": "BR"
      },
      {
        "gender": "male",
        "name": { "title": "Mr", "first": "دانیال", "last": "صدر" },
        "location": {
          "street": { "number": 104, "name": "آیت الله مدرس" },
          "city": "قزوین",
          "state": "تهران",
          "country": "Iran",
          "postcode": 48662,
          "coordinates": { "latitude": "52.7879", "longitude": "179.4800" },
          "timezone": { "offset": "-9:00", "description": "Alaska" }
        },
        "email": "dnyl.sdr@example.com",
        "login": {
          "uuid": "ac6c7eac-45a6-423d-b03a-4fd52a0ac195",
          "username": "greencat208",
          "password": "bledsoe",
          "salt": "H5uQyQMV",
          "md5": "32a044e39dde654943225af6684c01b2",
          "sha1": "d7033315227279c45c185f24b74f5e0a443cf71e",
          "sha256": "248af3f6ded6cf1f2abf29c26b1552290285a3bf3fdb81e246ad589a05177924"
        },
        "dob": { "date": "1951-10-25T14:38:11.004Z", "age": 73 },
        "registered": { "date": "2022-04-24T16:56:36.088Z", "age": 3 },
        "phone": "049-01277369",
        "cell": "0906-583-1792",
        "id": { "name": "", "value": null },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/60.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
        },
        "nat": "IR"
      }
    ],
    info: {
      seed: "9fe63fabd976ab0f",
      results: 6,
      page: 1,
      version: "1.4"
    }
  };

  return datos;
}

