# İETT-API

İBB nin [yayınlamış](https://data.ibb.gov.tr/dataset/3e32bb5d-2936-41eb-bdc7-65b843487e99/resource/6821f452-f6ff-49e9-940a-d4ebfc78f03e/download/iett-web-servis-kullanm-dokumanv.1.0.pdf)  olduğu İETT Web Servisleri'nin kullanımının kolaylaştırılması amacı ile geliştirilmiştir.

###  Örnekler

```js
const iettAPI = require('./index')

// Hat-Durak-Güzergâh Web Servisi

iettAPI('HatDurakGuzergah', 'GetDurak', {
    DurakKodu: 106032
}).then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success HatDurakGuzergah')
}).catch(err => {
    console.log('Error HatDurakGuzergah', err.message)
})

// Duyurular Web Servisi 

iettAPI('Duyurular', 'GetDuyurular').then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success Duyurular')
}).catch(err => {
    console.log('Error Duyurular', err.message)
})

// Sefer Gerçekleşme Web Servisi

iettAPI('SeferGerceklesme', 'GetBozukSatih').then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success SeferGerceklesme')
}).catch(err => {
    console.log('Error SeferGerceklesme', e.message)
})

// İbb Web Servisi


iettAPI('ibb', 'HatServisi_GYY', {
    hat_kodu: '80T'
}).then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success ibb')
}).catch(err => {
    console.log('Error ibb', err.message)
})


// Planlanan Sefer Saati Web Servisi

iettAPI('PlanlananSeferSaati', 'GetPlanlananSeferSaati', {
    HatKodu: '80T'
}).then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success PlanlananSeferSaati')
}).catch(err => {
    console.log('Error PlanlananSeferSaati', err.message)
})


// Araç Özellikleri Web Servisi


iettAPI('AracOzellik', 'GetAkarYakitToplamLitre', {
    Yil: 2020,
    Ay: 1
}).then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success AracOzellik')
}).catch(err => {
    console.log('Error AracOzellik', err.message)
})

// İBB 360 Web Servisi

iettAPI('ibb360', 'GetiettAPIArsivGorev', {
    Tarih: '20190528'
}).then(data => {
    // console.log('Data ', JSON.stringify(data))
    console.log('Success ibb360')
}).catch(err => {
    console.log('Error ibb360', err.message)
})
```