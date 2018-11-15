import MockAxiosConnection from './MockAxiosConnection'

export default class Api {
  constructor() {
    this.mockAxios = MockAxiosConnection
  }
}
