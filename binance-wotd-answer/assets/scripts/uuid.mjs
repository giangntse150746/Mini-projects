var r = "ffffffff-ffff-ffff-ffff-ffffffffffff",
  n = "00000000-0000-0000-0000-000000000000",
  P = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  };
var l,
  s,
  v = new Uint8Array(16);
function u(r, n = 0) {
  return (
    a[r[n + 0]] +
    a[r[n + 1]] +
    a[r[n + 2]] +
    a[r[n + 3]] +
    "-" +
    a[r[n + 4]] +
    a[r[n + 5]] +
    "-" +
    a[r[n + 6]] +
    a[r[n + 7]] +
    "-" +
    a[r[n + 8]] +
    a[r[n + 9]] +
    "-" +
    a[r[n + 10]] +
    a[r[n + 11]] +
    a[r[n + 12]] +
    a[r[n + 13]] +
    a[r[n + 14]] +
    a[r[n + 15]]
  ).toLowerCase();
}
for (var f, a = [], i = 0; i < 256; ++i) a.push((i + 256).toString(16).slice(1));
function p() {
  if (
    !f &&
    !(f =
      "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return f(v);
}
function E(r, n, e) {
  if (P.randomUUID && !n && !r) return P.randomUUID();
  var t = (r = r || {}).random || (r.rng || p)();
  if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), n)) {
    e = e || 0;
    for (var o = 0; o < 16; ++o) n[e + o] = t[o];
    return n;
  }
  return u(t);
}
var y = 0,
  d = 0;
function g(r, n, e) {
  var t = (n && e) || 0,
    o = n || new Array(16),
    f = (r = r || {}).node,
    a = r.clockseq;
  if ((r._v6 || (f || (f = l), null == a && (a = s)), null == f || null == a)) {
    var i = r.random || (r.rng || p)();
    null == f && ((f = [i[0], i[1], i[2], i[3], i[4], i[5]]), l || r._v6 || ((f[0] |= 1), (l = f))),
      null == a && ((a = 16383 & ((i[6] << 8) | i[7])), void 0 !== s || r._v6 || (s = a));
  }
  var c = void 0 !== r.msecs ? r.msecs : Date.now(),
    v = void 0 !== r.nsecs ? r.nsecs : d + 1,
    g = c - y + (v - d) / 1e4;
  if (
    (g < 0 && void 0 === r.clockseq && (a = (a + 1) & 16383),
    (g < 0 || c > y) && void 0 === r.nsecs && (v = 0),
    v >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (y = c), (d = v), (s = a);
  var h = (1e4 * (268435455 & (c += 122192928e5)) + v) % 4294967296;
  (o[t++] = (h >>> 24) & 255),
    (o[t++] = (h >>> 16) & 255),
    (o[t++] = (h >>> 8) & 255),
    (o[t++] = 255 & h);
  var b = ((c / 4294967296) * 1e4) & 268435455;
  (o[t++] = (b >>> 8) & 255),
    (o[t++] = 255 & b),
    (o[t++] = ((b >>> 24) & 15) | 16),
    (o[t++] = (b >>> 16) & 255),
    (o[t++] = (a >>> 8) | 128),
    (o[t++] = 255 & a);
  for (var m = 0; m < 6; ++m) o[t + m] = f[m];
  return n || u(o);
}
export { r as MAX, n as NIL, g as v1, E as v4 };

export default { MAX: r, NIL: n, v1: g, v4: E };
