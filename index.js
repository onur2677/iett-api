const { soap } = require('strong-soap')
const { promisify } = require('util')

const serviceMap = {
    HatDurakGuzergah: '/UlasimAnaVeri/HatDurakGuzergah',
    PlanlananSeferSaati: '/UlasimAnaVeri/PlanlananSeferSaati',
    Duyurular: '/UlasimDinamikVeri/Duyurular',
    SeferGerceklesme: '/FiloDurum/SeferGerceklesme',
    AracOzellik: '/AracAnaVeri/AracOzellik',
    ibb: '/ibb/ibb',
    ibb360: '/ibb/ibb360'
}

const createClient = promisify(soap.createClient)

/**
 * 
 * @param {serviceMapEnum} service 
 * @param {string} method 
 * @param {object} params 
 * @param {object} options Accepts any option that the request module accepts, see request module.
 * @returns 
 */
async function request(service, method, params, options) {
    const url = `https://api.ibb.gov.tr/iett${serviceMap[service]}.asmx?wsdl`
    let requestMethodType = ''
    let responseMethodType = ''
    if (service === 'ibb') {
        requestMethodType = method
        responseMethodType = `${method}Result`
    } else {
        requestMethodType = `${method}_json`
        responseMethodType = `${method}_jsonResult`
    }

    try {
        const client = await createClient(url)
        if (service === 'ibb360') {
            client.wsdl.options.envelopeKey = 'soapenv'
            client.wsdl.options.forceSoapVersion = '1.1'
        }
        const { result } = await client[requestMethodType](params, options)

        try {
            data = JSON.parse(result[responseMethodType])
        } catch (error) {
            data = result[responseMethodType]
        }
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }

}

module.exports = request