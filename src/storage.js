class LocalStorageAdapter {
  constructor() {
    this.key = 'orbitsync-state';
  }

  save(state) {
    localStorage.setItem(this.key, JSON.stringify(state));
  }

  load() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }
}

module.exports = { LocalStorageAdapter };