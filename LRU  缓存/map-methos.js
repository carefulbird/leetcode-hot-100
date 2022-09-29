/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.maxSize = capacity
  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const res = this.map.get(key)
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {}
