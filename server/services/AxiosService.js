


var axios = require('axios')



// @ts-ignore
var imgApi = axios.create({
  baseURL: 'http://www.splashbase.co/api/v1/images/search?query=woods',
  timeout: 2000
})


class AxiosService {
  async getImages(){
    let photos = await imgApi.get()
    let photo = photos.data.images[0]
    return photo
  }
}


export const axiosService = new AxiosService()