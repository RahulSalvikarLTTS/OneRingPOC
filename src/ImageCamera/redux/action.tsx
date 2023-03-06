import types from "./types";

export function camera(data: any){
    return{
        type: types.CAMERA,
        payload: data
    }
}

export function gallery(data: any){
    return{
        type: types.GALLERY,
        payload: data
    }
}

export function fileManager(data: any){
    return{
        type: types.FILEMANAGER,
        payload: data
    }
}