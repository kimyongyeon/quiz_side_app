export class Util {
    static localSaveJsonToString(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static localReadStringToJson(key: string) {
        localStorage.getItem(key);
    }
}
