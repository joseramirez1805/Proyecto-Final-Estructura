export default class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    const found = this.items.find((p) => p.id === item.id);
    if (found) {
      found.qty = (found.qty || 1) + 1;
    } else {
      this.items.push({ ...item, qty: 1 });
    }
  }
  decrease(id) {
    const idx = this.items.findIndex((p) => p.id === id);
    if (idx === -1) return;
    if (this.items[idx].qty > 1) this.items[idx].qty -= 1;
    else this.items.splice(idx, 1);
  }
  remove(id) {
    this.items = this.items.filter((p) => p.id !== id);
  }
  dequeue() {
    return this.items.length ? this.items.shift() : null;
  }
  peek() {
    return this.items.length ? this.items[0] : null;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  toArray() {
    return this.items.map((i) => ({ ...i }));
  }
  clear() {
    this.items = [];
  }
}
