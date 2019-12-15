import axios from 'axios';
import Promise from 'bluebird';



export default function fetch(options) {
    return new Promise((resolve,reject)=> {
        axios({
        url : options.url,
        method : options.method,
        params : options.params,
        data: options.body,    
        headers : options.headers,
        }).then(response => {
            resolve(response.data)
        }).catch(e => {
            console.log("Promise rejection ", e);
            reject(e);
        })
    })
}
