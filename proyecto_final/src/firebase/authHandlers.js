export async function registerUser(registerFn, { name, email, password }, { toggleCart, locationSearch } = {}) {
  try {
    const res = await registerFn(name, email, password);
    if (res && res.ok) {
      try {
        const params = new URLSearchParams(locationSearch || "");
        const ret = params.get('return');
        if (ret === 'cart' && typeof toggleCart === 'function') toggleCart();
      } catch (err) {
        console.warn(err);
      }
    }
    return res;
  } catch (err) {
    console.error(err);
    return { ok: false, error: err?.message || 'Error en registerUser' };
  }
}

export async function loginUser(loginFn, { email, password }, { toggleCart, locationSearch } = {}) {
  try {
    const res = await loginFn(email, password);
    if (res && res.ok) {
      try {
        const params = new URLSearchParams(locationSearch || "");
        const ret = params.get('return');
        if (ret === 'cart' && typeof toggleCart === 'function') toggleCart();
      } catch (err) {
        console.warn(err);
      }
    }
    return res;
  } catch (err) {
    console.error(err);
    return { ok: false, error: err?.message || 'Error en loginUser' };
  }
}
