export default class Stack {
  constructor() {
    this.items = [];
  }

  // Agrega al tope; si ya existe, lo mueve al tope (no duplicados)
  push(item) {
    const idx = this.items.findIndex((p) => p.id === item.id);
    if (idx !== -1) {
      // mover al tope
      this.items.splice(idx, 1);
    }
    this.items.push({ ...item });
  }

  // Saca del tope
  pop() {
    return this.items.length ? this.items.pop() : null;
  }

  // Ver tope sin quitar
  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }

  // Eliminar por id
  remove(id) {
    this.items = this.items.filter((p) => p.id !== id);
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  // devuelve copia (orden: bottom -> top)
  toArray() {
    return this.items.map((i) => ({ ...i }));
  }

  clear() {
    this.items = [];
  }
}
