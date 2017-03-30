/**
 * Created by BoB on 3/9/2017.
 */
export default class User {
  constructor() {
    'ngInject';
  }

  getCurrentPosition(){
    const options = {
      enableHighAccuracy: true
    };
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        resolve(position)
      },(error)=>{
        reject(error)
      },options)
    })
  }

}/**
 * Created by BoB on 3/9/2017.
 */
