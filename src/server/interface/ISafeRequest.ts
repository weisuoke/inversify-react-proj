export interface ISafeRequest {
  fecth(url : string, arg?: Object, callback?: Function) : Promise <Object>
}