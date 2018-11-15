import Api from '@/apis/Api'
import AxiosConnection from './AxiosConnection'

/**
 *
 */
export default class TestApi extends Api {
  constructor() {
    super()
    // configure axios instance
    this.axios = AxiosConnection
  }
}
