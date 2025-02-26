const { BroadcastChannel } = require('broadcast-channel');
const { LocalStorageAdapter } = require('./storage');
const { SyncManager } = require('./sync');

class OrbitSync {
  constructor(options = {}) {
    this.state = {};
    this.listeners = new Set();
    this.storage = options.storage === 'localStorage' ? new LocalStorageAdapter() : null;
    this.channel = new BroadcastChannel(options.channel || 'default-channel');
    this.sync = new SyncManager(this.channel, this);
    this.state = this.storage?.load() || options.initialState || {};
    this.sync.onUpdate((newState) => {
      this.state = { ...this.state, ...newState };
      this.notify();
    });
  }

  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.state);
  }

  set(keyOrObj, value) {
    if (typeof keyOrObj === 'object') {
      this.state = { ...this.state, ...keyOrObj };
    } else {
      this.state[keyOrObj] = value;
    }
    this.persist();
    this.sync.broadcast(this.state);
    this.notify();
  }

  update(key, updater) {
    this.set(key, updater(this.get(key)));
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.state);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb(this.state));
  }

  persist() {
    if (this.storage) this.storage.save(this.state);
  }
}

module.exports = { OrbitSync };