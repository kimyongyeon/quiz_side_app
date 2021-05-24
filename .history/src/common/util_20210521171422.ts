export default class Util {
    static localSaveJsonToString(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static localReadStringToJson(key: string = {}) {
        return JSON.parse(localStorage.getItem(key));
    }
}
