// Création d'une archive ZIP dans le navigateur, sans librairie externe.
// Les fichiers sont stockés sans recompression : photos et peintures sont déjà compressées.

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

function localHeader(nameBytes, size, crc, stamp) {
  const h = new DataView(new ArrayBuffer(30));
  h.setUint32(0, 0x04034b50, true);
  h.setUint16(4, 20, true);
  h.setUint16(6, 0x0800, true); // noms de fichiers en UTF-8
  h.setUint16(8, 0, true); // stockage sans compression
  h.setUint16(10, stamp.time, true);
  h.setUint16(12, stamp.day, true);
  h.setUint32(14, crc, true);
  h.setUint32(18, size, true);
  h.setUint32(22, size, true);
  h.setUint16(26, nameBytes.length, true);
  return new Uint8Array(h.buffer);
}

function centralHeader(nameBytes, size, crc, stamp, offset) {
  const h = new DataView(new ArrayBuffer(46));
  h.setUint32(0, 0x02014b50, true);
  h.setUint16(4, 20, true);
  h.setUint16(6, 20, true);
  h.setUint16(8, 0x0800, true);
  h.setUint16(10, 0, true);
  h.setUint16(12, stamp.time, true);
  h.setUint16(14, stamp.day, true);
  h.setUint32(16, crc, true);
  h.setUint32(20, size, true);
  h.setUint32(24, size, true);
  h.setUint16(28, nameBytes.length, true);
  h.setUint32(42, offset, true);
  return new Uint8Array(h.buffer);
}

function endRecord(count, centralSize, centralOffset) {
  const h = new DataView(new ArrayBuffer(22));
  h.setUint32(0, 0x06054b50, true);
  h.setUint16(8, count, true);
  h.setUint16(10, count, true);
  h.setUint32(12, centralSize, true);
  h.setUint32(16, centralOffset, true);
  return new Uint8Array(h.buffer);
}

/**
 * @param {{ name: string, data: Uint8Array }[]} files
 * @returns {Blob}
 */
export function makeZip(files) {
  const encoder = new TextEncoder();
  const stamp = dosDateTime(new Date());
  const parts = [];
  const central = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const crc = crc32(file.data);
    const header = localHeader(nameBytes, file.data.length, crc, stamp);
    parts.push(header, nameBytes, file.data);
    central.push(centralHeader(nameBytes, file.data.length, crc, stamp, offset), nameBytes);
    offset += header.length + nameBytes.length + file.data.length;
  }

  const centralSize = central.reduce((sum, part) => sum + part.length, 0);
  return new Blob([...parts, ...central, endRecord(files.length, centralSize, offset)], { type: 'application/zip' });
}
