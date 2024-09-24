class Cache{
    constructor(){
        this.cache = {};
        this.stats = [];
    }

    set(key, value, count = 1){
        this.cache[key] = {value, count};
        this.stats.push({key, value, count});
    }
    get(key){
        if (this.cache[key]){
            const {value, count } = this.cache[key];
            if (count > 0) {
                this.cache[key].count -= 1;
                return value;
            } 
            else {
                delete this.cache[key];
            }}
        return null;
    }
    getStats() {
        return this.stats;
    }
}
export {Cache}