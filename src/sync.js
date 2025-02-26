class SyncManager {
  constructor(channel, hub) {
    this.channel = channel;
    this.hub = hub;
    this.channel.onmessage = (newState) => {
      if (JSON.stringify(newState) !== JSON.stringify(this.hub.state)) {
        this.onUpdate(newState);
      }
    };
  }

  broadcast(state) {
    this.channel.postMessage(state);
  }

  onUpdate(callback) {
    this.onUpdate = callback;
  }
}

module.exports = { SyncManager };