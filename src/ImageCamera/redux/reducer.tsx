import types from "./types";

let init_state = {
    filePath: ''
}

export function filePathReducer(state = init_state, action: any) {
    switch (action.type) {
        case types.CAMERA: {
            let data = action.payload
            let filePathObj = String(data?.assets[0].uri)
            return {...state, filePath: filePathObj}
        }
        
        case types.GALLERY: {
            let data = action.payload
            console.log('data', data)
            let filePathObj = String(data?.assets[0].uri)
            return {...state, filePath: filePathObj}
        }

        case types.FILEMANAGER: {
            let data = action.payload
            let filePathObj = String(data.fileCopyUri)
            console.log('filePathObj', filePathObj)
            return {...state, filePath: filePathObj}
        }

        default: return {...state}
    }
}