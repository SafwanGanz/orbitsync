

# OrbitSync 🌌

**Synchronize state across tabs, clients, and contexts with ease.**

![npm](https://img.shields.io/npm/v/orbitsync) ![license](https://img.shields.io/npm/l/orbitsync) ![downloads](https://img.shields.io/npm/dt/orbitsync)

OrbitSync is a lightweight, powerful tool to keep your app’s state in perfect harmony—whether across browser tabs, server-client connections, or different parts of your codebase. Launch your state into orbit and let it sync seamlessly.

---

## ✨ Features

- **Cross-Tab Sync**: Real-time state updates across multiple browser tabs.
- **Persistence**: Store state in `localStorage` or customize your own adapter.
- **Event-Driven**: Subscribe to changes with a simple, intuitive API.
- **Framework Agnostic**: Works with plain JS, React, Vue, Node.js, and more.
- **Lightweight**: Minimal dependencies, maximum flexibility.

---

## 🚀 Installation

```bash
npm install orbitsync
```

---

## 🛠️ Usage

```javascript
const { OrbitSync } = require('orbitsync');

const orbit = new OrbitSync({
  storage: 'localStorage',
  channel: 'my-app-state',
});

orbit.set({ user: 'Alice', count: 0 });

orbit.subscribe((state) => {
  console.log('State in orbit:', state);
});

orbit.update('count', (prev) => prev + 1);
```

Open multiple tabs, tweak the state, and watch it sync instantly! 🌍

---

## 📚 API

### `new OrbitSync(options)`
- `options.storage`: `'localStorage'` or `null` (default: `null`).
- `options.channel`: Unique string for sync (default: `'default-channel'`).
- `options.initialState`: Object to seed the state (default: `{}`).

### Methods
- `orbit.get(path)`: Retrieve a value by dot-separated path (e.g., `'user.name'`).
- `orbit.set(keyOrObj, value)`: Set a single key or merge an object into state.
- `orbit.update(key, updater)`: Update a key with a function.
- `orbit.subscribe(callback)`: Listen for state changes; returns an unsubscribe function.

---

## 🌟 Why OrbitSync?

- **Simple**: Intuitive API, no steep learning curve.
- **Scalable**: Ready for small scripts or massive apps.
- **Open-Source**: Free forever under MIT license.

---

## 🛠️ Development

1. Clone the repo:
   ```bash
   git clone https://github.com/SafwanGanz/orbitsync.git
   cd orbitsync
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Link locally:
   ```bash
   npm link
   ```

---

## 🤝 Contributing

We’d love your help to make OrbitSync even better! 
- Fork the repo.
- Create a feature branch (`git checkout -b feature/awesome-thing`).
- Commit your changes (`git commit -m "Add awesome thing"`).
- Push it (`git push origin feature/awesome-thing`).
- Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## 📜 License

MIT

---

## 🌌 Get Involved

- ⭐ Star us on [GitHub](https://github.com/SafwanGanz/orbitsync)!
- 🐛 Report bugs or suggest features in [Issues](https://github.com/SafwanGanz/orbitsync/issues).
- 📩 Reach out for questions or collabs!

---