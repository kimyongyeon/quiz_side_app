class Util {
    localJsonToString(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    localReadStringToJson(key) {
        localStorage.getItem(key, JSON)
    }
}
