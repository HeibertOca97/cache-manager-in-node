# Cache Manager in Node

A simple caching solution for Node.js applications, allowing storage of database query results in text files to optimize performance and reduce redundant database access.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Features

- Store database query results in `.txt` files.
- Reduce database queries for repeated data retrieval.
- Easy-to-use API for managing cache files.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/HeibertOca97/cache-manager-in-node.git

2. Navega al directorio del proyecto:
    ```bash
    cd cache-manager-in-node

3. Instala las dependencias:
    ```bash
    npm install

## Usage

To use the cache manager, require it in your application and call the provided functions. Here’s a basic example:

```js
const cacheManager = require('./path/to/cacheManager');
    
// Create a cache
await cacheManager.createCache('example', { key: 'value' });

// Get a cache
const data = await cacheManager.getCache('example');
console.log(data); // Outputs: { key: 'value' }

// Remove a cache
await cacheManager.removeCache('example');
```

## API

### `createCache(name, data)`

Creates a cache file with the specified name and data.

- **Parameters**:
  - `name` (string): The name of the cache file (without extension).
  - `data` (object): The data to be stored in the cache.

---

### `removeCache(name)`

Removes the specified cache file.

- **Parameters**:
  - `name` (string): The name of the cache file (without extension).

---

### `getCache(name)`

Retrieves data from the specified cache file.

- **Parameters**:
  - `name` (string): The name of the cache file (without extension).

- **Returns**: The cached data as an object, or `null` if the cache does not exist.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to see.

## License
This project is licensed under the MIT License - see the LICENSE file for details.