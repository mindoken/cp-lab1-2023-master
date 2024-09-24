import {Cache} from "../src/cache";

describe('Cache', () => { 
    let cache;
    beforeEach(() => { cache = new Cache(); });

it('should set and get a value', () => { 
    cache.set('key1','value1');
    const result = cache.get('key1')
    expect(result).toBe('value1')
 });
it('should decrement the count and return null when count reaches 0', () => {cache.set('key1', 'value1', 3);

    expect(cache.get('key1')).toBe('value1');
    expect(cache.get('key1')).toBe('value1');
    expect(cache.get('key1')).toBe('value1');
    expect(cache.get('key1')).toBe(null);
 });

it('should handle default count value of 1', () => {
    cache.set('key1', 'value1');
    expect(cache.getStats()).toEqual([
      { key: 'key1', value: 'value1', count: 1 }]);
    });
it('should return null if cache does not have key ', () => {
    cache.set('key1','value1');
    const result = cache.get('key2');
    expect(result).toBe(null);
    })
}); 




