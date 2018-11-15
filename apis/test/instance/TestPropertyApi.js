import TestApi from '@/apis/test/TestApi'

class TestPropertyApi extends TestApi {
  /**
   *
   * @param {*} param0
   */
  async addProperty({ userId, name, type }) {
    return await this.axios.post('/properties', {
      name: name,
      type: type,
      userId: userId
    })
  }

  /**
   *
   * @param {*} id
   */
  async getPropertyById(id) {
    // return await this.axios.get(`/properties/${id}`)
    // will mock this, because used free api does not provide fetch
    return await this.mockAxios.get('/test/properties/property.json')
  }
}

export default new TestPropertyApi()
