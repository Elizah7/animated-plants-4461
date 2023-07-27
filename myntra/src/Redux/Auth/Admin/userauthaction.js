import axios from "axios"
import * as types from "./userauthactiontype"





export const getbanuserdata = () => (dispatch) => {
    dispatch({ type: types.BANNUSERREQUEST })
    return axios.get("https://amused-crab-singlet.cyclic.app/banneduser")
        .then(r => dispatch({ type: types.BANNUSERSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.DBANNUSERFAILURE }))
}

export const banuser = (data) => (dispatch) => {
    dispatch({ type: types.ADDBANNREQUEST })
    return axios.post("https://amused-crab-singlet.cyclic.app/banneduser", data)
        .then(r => dispatch({ type: types.ADDBANNSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.ADDBANNFAILURE }))
}



export const removeban = (id) => (dispatch) => {
    dispatch({ type: types.REMOVEBANNREQUEST })
    return axios.delete(`https://amused-crab-singlet.cyclic.app/banneduser/${id}`, )
        .then(r => dispatch({ type: types.REMOVEBANNSUCCESS, payload: r.data }))
        .catch(e => dispatch({ type: types.REMOVEBANNFAILURE }))
}