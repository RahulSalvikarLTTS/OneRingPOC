import types from "./types";

export function increment(data: any) {
    return {
        type: types.INCREMENT,
        payload: data
    }
}

export function decrement(data: any) {
    return {
        type: types.DECREMENT,
        payload: data
    }
}