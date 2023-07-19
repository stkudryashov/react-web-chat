/**
 * StorageService is a class that provides an interface for working with
 * localStorage and sessionStorage in a more convenient and structured way.
 */
export class StorageService {
  constructor() {}

  /**
   * Retrieves an item from localStorage by the provided key.
   * @param {string} key - The key of the item to be retrieved.
   * @returns {any} The value of the item, or null if the item doesn't exist.
   */
  static getLocalItem(key) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  /**
   * Retrieves an item from sessionStorage by the provided key.
   * @param {string} key - The key of the item to be retrieved.
   * @returns {any} The value of the item, or null if the item doesn't exist.
   */
  static getSessionItem(key) {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  /**
   * Saves an item in localStorage with the provided key and value.
   * @param {string} key - The key under which the value will be stored.
   * @param {any} value - The value to be stored.
   */
  static setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Saves an item in sessionStorage with the provided key and value.
   * @param {string} key - The key under which the value will be stored.
   * @param {any} value - The value to be stored.
   */
  static setSessionItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Removes an item from localStorage by the provided key.
   * @param {string} key - The key of the item to be removed.
   */
  static removeLocalItem(key) {
    localStorage.removeItem(key)
  }

  /**
   * Removes an item from sessionStorage by the provided key.
   * @param {string} key - The key of the item to be removed.
   */
  static removeSessionItem(key) {
    sessionStorage.removeItem(key)
  }

  /**
   * Clears all data from localStorage.
   */
  static clearLocalStorage() {
    localStorage.clear()
  }

  /**
   * Clears all data from sessionStorage.
   */
  static clearSessionStorage() {
    sessionStorage.clear()
  }
}
