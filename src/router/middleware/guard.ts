import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import {AXIOS} from "../../../services/api";
import store from "@/store";

const guard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

    const TOKEN: string | undefined = store.state.user.token;


    AXIOS({
        method: "get",
        url: "validatedToken",
        headers: {
            'Authorization': 'Bearer '+TOKEN
        }
    })
        .then((res) => {
            if(res.data.status === true) {
                store.commit('SAVE_SYSTEM', {login: true})
                return next()
            }

        }).catch(() => {
        store.commit('SAVE_SYSTEM',{login: false})

        return next({ path: '/'})
    })

};

export default guard;