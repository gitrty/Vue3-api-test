
import router from '@/router'
export default {
    install(app) {
        // Vue3.0 全局挂载
        app.config.globalProperties.$path = (path, query = {}) => router.push({ path, query }).catch(e => e)
    }
}