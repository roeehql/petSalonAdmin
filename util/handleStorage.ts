export const TOKEN = 'USER_TOKEN';
export const INFO = 'USER_INFO';

export const handleStorage = {
    setStorage : (key:string, value:string) => {
        localStorage.setItem(key,value)
    },
    getStorage : (key:string) => {
        const result = localStorage.getItem(key)
        if(result === null || result === undefined){
            return "empty"
        }
        return result
    },
    clearStorage: (key:string)=> {
        localStorage.removeItem(key)
    },
}