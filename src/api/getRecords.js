import { showTip, loading, loaded } from '../utils/tip'
import { cloudFunction } from '../utils/cloudFunction'


module.exports = {
    getRecords() {
        loading()
        return cloudFunction('getRecords').then(res => {
            return res
        })
            .catch(console.error)
            .then(res => {
                loaded()
                return res
            })
    }
}
