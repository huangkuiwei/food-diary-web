let base64DecodeChars = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  -1, -1, -1, -1, -1,
];

let hexOut = false;

function utf8to16(str) {
  let out, i, len, c;
  let char2, char3;
  let charCode;

  out = hexOut ? [] : '';
  len = str.length;
  i = 0;
  while (i < len) {
    c = hexOut ? str[i++] : str.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        hexOut ? out.push(str[i - 1]) : (out += str.charAt(i - 1));
        break;
      case 12:
      case 13:
        // 110x xxxx   10xx xxxx
        char2 = hexOut ? str[i++] : str.charCodeAt(i++);
        charCode = ((c & 0x1f) << 6) | (char2 & 0x3f);
        hexOut ? out.push(charCode) : (out += String.fromCharCode(charCode));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = hexOut ? str[i++] : str.charCodeAt(i++);
        char3 = hexOut ? str[i++] : str.charCodeAt(i++);
        charCode = ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0);
        hexOut ? out.push(charCode) : (out += String.fromCharCode(charCode));
        break;
    }
  }

  return out;
}

function base64decode(str) {
  let c1, c2, c3, c4;
  let i, len, out;
  let charCode;

  len = str.length;
  i = 0;
  out = hexOut ? [] : '';
  while (i < len) {
    /* c1 */
    do {
      c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c1 === -1);
    if (c1 === -1) break;

    /* c2 */
    do {
      c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while (i < len && c2 === -1);
    if (c2 === -1) break;

    charCode = (c1 << 2) | ((c2 & 0x30) >> 4);
    hexOut ? out.push(charCode) : (out += String.fromCharCode(charCode));

    /* c3 */
    do {
      c3 = str.charCodeAt(i++) & 0xff;
      if (c3 === 61) return out;
      c3 = base64DecodeChars[c3];
    } while (i < len && c3 === -1);
    if (c3 === -1) break;
    charCode = ((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2);
    hexOut ? out.push(charCode) : (out += String.fromCharCode(charCode));

    /* c4 */
    do {
      c4 = str.charCodeAt(i++) & 0xff;
      if (c4 === 61) return out;
      c4 = base64DecodeChars[c4];
    } while (i < len && c4 === -1);
    if (c4 === -1) break;
    charCode = ((c3 & 0x03) << 6) | c4;
    hexOut ? out.push(charCode) : (out += String.fromCharCode(charCode));
  }
  return out;
}

export function base64_decode(src, hO, out_de) {
  hexOut = hO;
  let ret = base64decode(src);
  if (!hexOut || out_de === 'u' || out_de === 'd') {
    ret = utf8to16(ret);
  }
  return ret;
}
