// IndexedDB utility module: dbUtil.js

// Open or create IndexedDB database and object stores
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("AppCacheDB", 1);

    request.onerror = (event) => {
      reject("IndexedDB error:", event.target.errorCode);
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("requests", { keyPath: "key" });
    };
  });
};

// Get cached data from IndexedDB
const getCachedData = async (key) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["requests"]);
    const objectStore = transaction.objectStore("requests");
    const request = objectStore.get(key);

    request.onerror = (event) => {
      reject("Error fetching from IndexedDB", event.target.errorCode);
    };

    request.onsuccess = (event) => {
      const data = event.target.result;
      const now = new Date().getTime();

      if (data && now - data.timestamp < 3600000) {
        // 1hr expiration
        resolve(data.value);
      } else {
        resolve(null);
      }
    };
  });
};

// Set or update cached data in IndexedDB
const setCachedData = async (key, value) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["requests"], "readwrite");
    const objectStore = transaction.objectStore("requests");
    const request = objectStore.put({
      key,
      value,
      timestamp: new Date().getTime(),
    });

    request.onerror = (event) => {
      reject("Error saving to IndexedDB", event.target.errorCode);
    };

    request.onsuccess = () => {
      resolve(true);
    };
  });
};

export { getCachedData, setCachedData };
