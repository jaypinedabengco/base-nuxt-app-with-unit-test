import TestApi from '@/apis/test/TestApi'

class TestUserApi extends TestApi {
  /**
   *
   * @param {*} model
   */
  async addUser({ name, job }) {
    try {
      return await this.axios.post('/users', { name: name, job: job })
    } catch (error) {
      console.log('i caught you on the service part', error)
    }
  }

  /**
   *
   * @param {*} name
   */
  async getUserById(id) {
    // return await this.post.get(`/users/${id}`)
    // will mock this, because used free api does not provide fetch
    return await this.mockAxios.get('/test/users/user.json')
  }
}

export default new TestUserApi()
