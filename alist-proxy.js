var ADDRESS = "YOUR_ADDRESS";
var TOKEN = "YOUR_TOKEN";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
    if (typeof require !== "undefined")
        return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
        for (let key of __getOwnPropNames(from2))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e2) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}
function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
function noop() {
}
function binding(name) {
    throw new Error("process.binding is not supported");
}
function cwd() {
    return "/";
}
function chdir(dir) {
    throw new Error("process.chdir is not supported");
}
function umask() {
    return 0;
}
function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
        seconds = seconds - previousTimestamp[0];
        nanoseconds = nanoseconds - previousTimestamp[1];
        if (nanoseconds < 0) {
            seconds--;
            nanoseconds += 1e9;
        }
    }
    return [seconds, nanoseconds];
}
function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1e3;
}
var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener, once, off, removeListener, removeAllListeners, emit, performance, performanceNow, startTime, process, defines;
var init_virtual_process_polyfill = __esm({
    "node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js"() {
        cachedSetTimeout = defaultSetTimout;
        cachedClearTimeout = defaultClearTimeout;
        if (typeof globalThis.setTimeout === "function") {
            cachedSetTimeout = setTimeout;
        }
        if (typeof globalThis.clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
        }
        queue = [];
        draining = false;
        queueIndex = -1;
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        title = "browser";
        platform = "browser";
        browser = true;
        env = {};
        argv = [];
        version = "";
        versions = {};
        release = {};
        config = {};
        on = noop;
        addListener = noop;
        once = noop;
        off = noop;
        removeListener = noop;
        removeAllListeners = noop;
        emit = noop;
        performance = globalThis.performance || {};
        performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
            return new Date().getTime();
        };
        startTime = new Date();
        process = {
            nextTick,
            title,
            browser,
            env,
            argv,
            version,
            versions,
            on,
            addListener,
            once,
            off,
            removeListener,
            removeAllListeners,
            emit,
            binding,
            cwd,
            chdir,
            umask,
            hrtime,
            platform,
            release,
            config,
            uptime
        };
        defines = {};
        Object.keys(defines).forEach((key) => {
            const segs = key.split(".");
            let target = process;
            for (let i = 0; i < segs.length; i++) {
                const seg = segs[i];
                if (i === segs.length - 1) {
                    target[seg] = defines[key];
                } else {
                    target = target[seg] || (target[seg] = {});
                }
            }
        });
    }
});

// node_modules/@esbuild-plugins/node-globals-polyfill/Buffer.js
function init() {
    inited = true;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
}
function base64toByteArray(b64) {
    if (!inited) {
        init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
    }
    placeHolders = b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
    arr = new Arr(len * 3 / 4 - placeHolders);
    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = tmp >> 16 & 255;
        arr[L++] = tmp >> 8 & 255;
        arr[L++] = tmp & 255;
    }
    if (placeHolders === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[L++] = tmp & 255;
    } else if (placeHolders === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[L++] = tmp >> 8 & 255;
        arr[L++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function base64fromByteArray(uint8) {
    if (!inited) {
        init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var output = "";
    var parts = [];
    var maxChunkLength = 16383;
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(
            encodeChunk(
                uint8,
                i,
                i + maxChunkLength > len2 ? len2 : i + maxChunkLength
            )
        );
    }
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[tmp << 4 & 63];
        output += "==";
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        output += lookup[tmp >> 10];
        output += lookup[tmp >> 4 & 63];
        output += lookup[tmp << 2 & 63];
        output += "=";
    }
    parts.push(output);
    return parts.join("");
}
function kMaxLength() {
    return Buffer2.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function createBuffer(that, length) {
    if (kMaxLength() < length) {
        throw new RangeError("Invalid typed array length");
    }
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer2.prototype;
    } else {
        if (that === null) {
            that = new Buffer2(length);
        }
        that.length = length;
    }
    return that;
}
function Buffer2(arg, encodingOrOffset, length) {
    if (!Buffer2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer2)) {
        return new Buffer2(arg, encodingOrOffset, length);
    }
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
            throw new Error(
                "If encoding is specified then the first argument must be a string"
            );
        }
        return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
}
function from(that, value, encodingOrOffset, length) {
    if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
    }
    if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
    }
    if (typeof value === "string") {
        return fromString(that, value, encodingOrOffset);
    }
    return fromObject(that, value);
}
function assertSize(size) {
    if (typeof size !== "number") {
        throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
    }
}
function alloc(that, size, fill2, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(that, size);
    }
    if (fill2 !== void 0) {
        return typeof encoding === "string" ? createBuffer(that, size).fill(fill2, encoding) : createBuffer(that, size).fill(fill2);
    }
    return createBuffer(that, size);
}
function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer2.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
            that[i] = 0;
        }
    }
    return that;
}
function fromString(that, string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
    }
    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);
    if (actual !== length) {
        that = that.slice(0, actual);
    }
    return that;
}
function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
    }
    return that;
}
function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength;
    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
    }
    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
    }
    if (byteOffset === void 0 && length === void 0) {
        array = new Uint8Array(array);
    } else if (length === void 0) {
        array = new Uint8Array(array, byteOffset);
    } else {
        array = new Uint8Array(array, byteOffset, length);
    }
    if (Buffer2.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer2.prototype;
    } else {
        that = fromArrayLike(that, array);
    }
    return that;
}
function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);
        if (that.length === 0) {
            return that;
        }
        obj.copy(that, 0, 0, len);
        return that;
    }
    if (obj) {
        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if (typeof obj.length !== "number" || isnan(obj.length)) {
                return createBuffer(that, 0);
            }
            return fromArrayLike(that, obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
        }
    }
    throw new TypeError(
        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
    );
}
function checked(length) {
    if (length >= kMaxLength()) {
        throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes"
        );
    }
    return length | 0;
}
function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
}
function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
        return string.length;
    }
    if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== "string") {
        string = "" + string;
    }
    var len = string.length;
    if (len === 0)
        return 0;
    var loweredCase = false;
    for (; ; ) {
        switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
                return len;
            case "utf8":
            case "utf-8":
            case void 0:
                return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return len * 2;
            case "hex":
                return len >>> 1;
            case "base64":
                return base64ToBytes(string).length;
            default:
                if (loweredCase)
                    return utf8ToBytes(string).length;
                encoding = ("" + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}
function slowToString(encoding, start, end) {
    var loweredCase = false;
    if (start === void 0 || start < 0) {
        start = 0;
    }
    if (start > this.length) {
        return "";
    }
    if (end === void 0 || end > this.length) {
        end = this.length;
    }
    if (end <= 0) {
        return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
        return "";
    }
    if (!encoding)
        encoding = "utf8";
    while (true) {
        switch (encoding) {
            case "hex":
                return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
                return utf8Slice(this, start, end);
            case "ascii":
                return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
                return latin1Slice(this, start, end);
            case "base64":
                return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return utf16leSlice(this, start, end);
            default:
                if (loweredCase)
                    throw new TypeError("Unknown encoding: " + encoding);
                encoding = (encoding + "").toLowerCase();
                loweredCase = true;
        }
    }
}
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0)
        return -1;
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
    }
    if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir)
            return -1;
        else
            byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir)
            byteOffset = 0;
        else
            return -1;
    }
    if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
    }
    if (internalIsBuffer(val)) {
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 255;
        if (Buffer2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(
                    buffer,
                    val,
                    byteOffset
                );
            } else {
                return Uint8Array.prototype.lastIndexOf.call(
                    buffer,
                    val,
                    byteOffset
                );
            }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i2) {
        if (indexSize === 1) {
            return buf[i2];
        } else {
            return buf.readUInt16BE(i2 * indexSize);
        }
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1)
                    foundIndex = i;
                if (i - foundIndex + 1 === valLength)
                    return foundIndex * indexSize;
            } else {
                if (foundIndex !== -1)
                    i -= i - foundIndex;
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found)
                return i;
        }
    }
    return -1;
}
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
        throw new TypeError("Invalid hex string");
    if (length > strLen / 2) {
        length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed))
            return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(
        utf8ToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(
        utf16leToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return base64fromByteArray(buf);
    } else {
        return base64fromByteArray(buf.slice(start, end));
    }
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
                case 1:
                    if (firstByte < 128) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }
        if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
    }
    var res = "";
    var i = 0;
    while (i < len) {
        res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
    }
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
        start = 0;
    if (!end || end < 0 || end > len)
        end = len;
    var out = "";
    for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
    }
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
    if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
}
function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
        value = 65535 + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
}
function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
        value = 4294967295 + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
    }
}
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    if (offset < 0)
        throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(
            buf,
            value,
            offset,
            4,
            34028234663852886e22,
            -34028234663852886e22
        );
    }
    ieee754write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(
            buf,
            value,
            offset,
            8,
            17976931348623157e292,
            -17976931348623157e292
        );
    }
    ieee754write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
        return "";
    while (str.length % 4 !== 0) {
        str = str + "=";
    }
    return str;
}
function stringtrim(str) {
    if (str.trim)
        return str.trim();
    return str.replace(/^\s+|\s+$/g, "");
}
function toHex(n) {
    if (n < 16)
        return "0" + n.toString(16);
    return n.toString(16);
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1)
                        bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1)
                        bytes.push(239, 191, 189);
                    continue;
                }
                leadSurrogate = codePoint;
                continue;
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1)
                    bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
            if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
            if ((units -= 1) < 0)
                break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
                break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
                break;
            bytes.push(
                codePoint >> 12 | 224,
                codePoint >> 6 & 63 | 128,
                codePoint & 63 | 128
            );
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
                break;
            bytes.push(
                codePoint >> 18 | 240,
                codePoint >> 12 & 63 | 128,
                codePoint >> 6 & 63 | 128,
                codePoint & 63 | 128
            );
        } else {
            throw new Error("Invalid code point");
        }
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
    }
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
            break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
            break;
        dst[i + offset] = src[i];
    }
    return i;
}
function isnan(val) {
    return val !== val;
}
function isBuffer(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
}
function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isFastBuffer(obj.slice(0, 0));
}
function ieee754read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
    }
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
function ieee754write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
    }
    buffer[offset + i - d] |= s * 128;
}
var lookup, revLookup, Arr, inited, MAX_ARGUMENTS_LENGTH, INVALID_BASE64_RE;
var init_Buffer = __esm({
    "node_modules/@esbuild-plugins/node-globals-polyfill/Buffer.js"() {
        init_virtual_process_polyfill();
        init_buffer();
        lookup = [];
        revLookup = [];
        Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
        inited = false;
        Buffer2.TYPED_ARRAY_SUPPORT = globalThis.TYPED_ARRAY_SUPPORT !== void 0 ? globalThis.TYPED_ARRAY_SUPPORT : true;
        Buffer2.poolSize = 8192;
        Buffer2._augment = function(arr) {
            arr.__proto__ = Buffer2.prototype;
            return arr;
        };
        Buffer2.from = function(value, encodingOrOffset, length) {
            return from(null, value, encodingOrOffset, length);
        };
        Buffer2.kMaxLength = kMaxLength();
        if (Buffer2.TYPED_ARRAY_SUPPORT) {
            Buffer2.prototype.__proto__ = Uint8Array.prototype;
            Buffer2.__proto__ = Uint8Array;
            if (typeof Symbol !== "undefined" && Symbol.species && Buffer2[Symbol.species] === Buffer2) {
            }
        }
        Buffer2.alloc = function(size, fill2, encoding) {
            return alloc(null, size, fill2, encoding);
        };
        Buffer2.allocUnsafe = function(size) {
            return allocUnsafe(null, size);
        };
        Buffer2.allocUnsafeSlow = function(size) {
            return allocUnsafe(null, size);
        };
        Buffer2.isBuffer = isBuffer;
        Buffer2.compare = function compare(a, b) {
            if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
                throw new TypeError("Arguments must be Buffers");
            }
            if (a === b)
                return 0;
            var x = a.length;
            var y = b.length;
            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
            }
            if (x < y)
                return -1;
            if (y < x)
                return 1;
            return 0;
        };
        Buffer2.isEncoding = function isEncoding(encoding) {
            switch (String(encoding).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return true;
                default:
                    return false;
            }
        };
        Buffer2.concat = function concat(list, length) {
            if (!Array.isArray(list)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
            }
            if (list.length === 0) {
                return Buffer2.alloc(0);
            }
            var i;
            if (length === void 0) {
                length = 0;
                for (i = 0; i < list.length; ++i) {
                    length += list[i].length;
                }
            }
            var buffer = Buffer2.allocUnsafe(length);
            var pos = 0;
            for (i = 0; i < list.length; ++i) {
                var buf = list[i];
                if (!internalIsBuffer(buf)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                buf.copy(buffer, pos);
                pos += buf.length;
            }
            return buffer;
        };
        Buffer2.byteLength = byteLength;
        Buffer2.prototype._isBuffer = true;
        Buffer2.prototype.swap16 = function swap16() {
            var len = this.length;
            if (len % 2 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            }
            for (var i = 0; i < len; i += 2) {
                swap(this, i, i + 1);
            }
            return this;
        };
        Buffer2.prototype.swap32 = function swap32() {
            var len = this.length;
            if (len % 4 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            }
            for (var i = 0; i < len; i += 4) {
                swap(this, i, i + 3);
                swap(this, i + 1, i + 2);
            }
            return this;
        };
        Buffer2.prototype.swap64 = function swap64() {
            var len = this.length;
            if (len % 8 !== 0) {
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            }
            for (var i = 0; i < len; i += 8) {
                swap(this, i, i + 7);
                swap(this, i + 1, i + 6);
                swap(this, i + 2, i + 5);
                swap(this, i + 3, i + 4);
            }
            return this;
        };
        Buffer2.prototype.toString = function toString() {
            var length = this.length | 0;
            if (length === 0)
                return "";
            if (arguments.length === 0)
                return utf8Slice(this, 0, length);
            return slowToString.apply(this, arguments);
        };
        Buffer2.prototype.equals = function equals(b) {
            if (!internalIsBuffer(b))
                throw new TypeError("Argument must be a Buffer");
            if (this === b)
                return true;
            return Buffer2.compare(this, b) === 0;
        };
        Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
            if (!internalIsBuffer(target)) {
                throw new TypeError("Argument must be a Buffer");
            }
            if (start === void 0) {
                start = 0;
            }
            if (end === void 0) {
                end = target ? target.length : 0;
            }
            if (thisStart === void 0) {
                thisStart = 0;
            }
            if (thisEnd === void 0) {
                thisEnd = this.length;
            }
            if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                throw new RangeError("out of range index");
            }
            if (thisStart >= thisEnd && start >= end) {
                return 0;
            }
            if (thisStart >= thisEnd) {
                return -1;
            }
            if (start >= end) {
                return 1;
            }
            start >>>= 0;
            end >>>= 0;
            thisStart >>>= 0;
            thisEnd >>>= 0;
            if (this === target)
                return 0;
            var x = thisEnd - thisStart;
            var y = end - start;
            var len = Math.min(x, y);
            var thisCopy = this.slice(thisStart, thisEnd);
            var targetCopy = target.slice(start, end);
            for (var i = 0; i < len; ++i) {
                if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
            }
            if (x < y)
                return -1;
            if (y < x)
                return 1;
            return 0;
        };
        Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
            return this.indexOf(val, byteOffset, encoding) !== -1;
        };
        Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
        };
        Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
        };
        Buffer2.prototype.write = function write(string, offset, length, encoding) {
            if (offset === void 0) {
                encoding = "utf8";
                length = this.length;
                offset = 0;
            } else if (length === void 0 && typeof offset === "string") {
                encoding = offset;
                length = this.length;
                offset = 0;
            } else if (isFinite(offset)) {
                offset = offset | 0;
                if (isFinite(length)) {
                    length = length | 0;
                    if (encoding === void 0)
                        encoding = "utf8";
                } else {
                    encoding = length;
                    length = void 0;
                }
            } else {
                throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
            }
            var remaining = this.length - offset;
            if (length === void 0 || length > remaining)
                length = remaining;
            if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                throw new RangeError("Attempt to write outside buffer bounds");
            }
            if (!encoding)
                encoding = "utf8";
            var loweredCase = false;
            for (; ; ) {
                switch (encoding) {
                    case "hex":
                        return hexWrite(this, string, offset, length);
                    case "utf8":
                    case "utf-8":
                        return utf8Write(this, string, offset, length);
                    case "ascii":
                        return asciiWrite(this, string, offset, length);
                    case "latin1":
                    case "binary":
                        return latin1Write(this, string, offset, length);
                    case "base64":
                        return base64Write(this, string, offset, length);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return ucs2Write(this, string, offset, length);
                    default:
                        if (loweredCase)
                            throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                }
            }
        };
        Buffer2.prototype.toJSON = function toJSON() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        MAX_ARGUMENTS_LENGTH = 4096;
        Buffer2.prototype.slice = function slice(start, end) {
            var len = this.length;
            start = ~~start;
            end = end === void 0 ? len : ~~end;
            if (start < 0) {
                start += len;
                if (start < 0)
                    start = 0;
            } else if (start > len) {
                start = len;
            }
            if (end < 0) {
                end += len;
                if (end < 0)
                    end = 0;
            } else if (end > len) {
                end = len;
            }
            if (end < start)
                end = start;
            var newBuf;
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                newBuf = this.subarray(start, end);
                newBuf.__proto__ = Buffer2.prototype;
            } else {
                var sliceLen = end - start;
                newBuf = new Buffer2(sliceLen, void 0);
                for (var i = 0; i < sliceLen; ++i) {
                    newBuf[i] = this[i + start];
                }
            }
            return newBuf;
        };
        Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert)
                checkOffset(offset, byteLength2, this.length);
            var val = this[offset];
            var mul = 1;
            var i = 0;
            while (++i < byteLength2 && (mul *= 256)) {
                val += this[offset + i] * mul;
            }
            return val;
        };
        Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert) {
                checkOffset(offset, byteLength2, this.length);
            }
            var val = this[offset + --byteLength2];
            var mul = 1;
            while (byteLength2 > 0 && (mul *= 256)) {
                val += this[offset + --byteLength2] * mul;
            }
            return val;
        };
        Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 1, this.length);
            return this[offset];
        };
        Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 2, this.length);
            return this[offset] | this[offset + 1] << 8;
        };
        Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 2, this.length);
            return this[offset] << 8 | this[offset + 1];
        };
        Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
        };
        Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        };
        Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert)
                checkOffset(offset, byteLength2, this.length);
            var val = this[offset];
            var mul = 1;
            var i = 0;
            while (++i < byteLength2 && (mul *= 256)) {
                val += this[offset + i] * mul;
            }
            mul *= 128;
            if (val >= mul)
                val -= Math.pow(2, 8 * byteLength2);
            return val;
        };
        Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert)
                checkOffset(offset, byteLength2, this.length);
            var i = byteLength2;
            var mul = 1;
            var val = this[offset + --i];
            while (i > 0 && (mul *= 256)) {
                val += this[offset + --i] * mul;
            }
            mul *= 128;
            if (val >= mul)
                val -= Math.pow(2, 8 * byteLength2);
            return val;
        };
        Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 1, this.length);
            if (!(this[offset] & 128))
                return this[offset];
            return (255 - this[offset] + 1) * -1;
        };
        Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 2, this.length);
            var val = this[offset] | this[offset + 1] << 8;
            return val & 32768 ? val | 4294901760 : val;
        };
        Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 2, this.length);
            var val = this[offset + 1] | this[offset] << 8;
            return val & 32768 ? val | 4294901760 : val;
        };
        Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        };
        Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        };
        Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return ieee754read(this, offset, true, 23, 4);
        };
        Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 4, this.length);
            return ieee754read(this, offset, false, 23, 4);
        };
        Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 8, this.length);
            return ieee754read(this, offset, true, 52, 8);
        };
        Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
            if (!noAssert)
                checkOffset(offset, 8, this.length);
            return ieee754read(this, offset, false, 52, 8);
        };
        Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                checkInt(this, value, offset, byteLength2, maxBytes, 0);
            }
            var mul = 1;
            var i = 0;
            this[offset] = value & 255;
            while (++i < byteLength2 && (mul *= 256)) {
                this[offset + i] = value / mul & 255;
            }
            return offset + byteLength2;
        };
        Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset | 0;
            byteLength2 = byteLength2 | 0;
            if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                checkInt(this, value, offset, byteLength2, maxBytes, 0);
            }
            var i = byteLength2 - 1;
            var mul = 1;
            this[offset + i] = value & 255;
            while (--i >= 0 && (mul *= 256)) {
                this[offset + i] = value / mul & 255;
            }
            return offset + byteLength2;
        };
        Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 1, 255, 0);
            if (!Buffer2.TYPED_ARRAY_SUPPORT)
                value = Math.floor(value);
            this[offset] = value & 255;
            return offset + 1;
        };
        Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 2, 65535, 0);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
            } else {
                objectWriteUInt16(this, value, offset, true);
            }
            return offset + 2;
        };
        Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 2, 65535, 0);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
            } else {
                objectWriteUInt16(this, value, offset, false);
            }
            return offset + 2;
        };
        Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 4, 4294967295, 0);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
            } else {
                objectWriteUInt32(this, value, offset, true);
            }
            return offset + 4;
        };
        Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 4, 4294967295, 0);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
            } else {
                objectWriteUInt32(this, value, offset, false);
            }
            return offset + 4;
        };
        Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength2 - 1);
                checkInt(this, value, offset, byteLength2, limit - 1, -limit);
            }
            var i = 0;
            var mul = 1;
            var sub = 0;
            this[offset] = value & 255;
            while (++i < byteLength2 && (mul *= 256)) {
                if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                    sub = 1;
                }
                this[offset + i] = (value / mul >> 0) - sub & 255;
            }
            return offset + byteLength2;
        };
        Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength2 - 1);
                checkInt(this, value, offset, byteLength2, limit - 1, -limit);
            }
            var i = byteLength2 - 1;
            var mul = 1;
            var sub = 0;
            this[offset + i] = value & 255;
            while (--i >= 0 && (mul *= 256)) {
                if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                    sub = 1;
                }
                this[offset + i] = (value / mul >> 0) - sub & 255;
            }
            return offset + byteLength2;
        };
        Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 1, 127, -128);
            if (!Buffer2.TYPED_ARRAY_SUPPORT)
                value = Math.floor(value);
            if (value < 0)
                value = 255 + value + 1;
            this[offset] = value & 255;
            return offset + 1;
        };
        Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 2, 32767, -32768);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
            } else {
                objectWriteUInt16(this, value, offset, true);
            }
            return offset + 2;
        };
        Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 2, 32767, -32768);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
            } else {
                objectWriteUInt16(this, value, offset, false);
            }
            return offset + 2;
        };
        Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
            } else {
                objectWriteUInt32(this, value, offset, true);
            }
            return offset + 4;
        };
        Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert)
                checkInt(this, value, offset, 4, 2147483647, -2147483648);
            if (value < 0)
                value = 4294967295 + value + 1;
            if (Buffer2.TYPED_ARRAY_SUPPORT) {
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
            } else {
                objectWriteUInt32(this, value, offset, false);
            }
            return offset + 4;
        };
        Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
            return writeFloat(this, value, offset, true, noAssert);
        };
        Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
            return writeFloat(this, value, offset, false, noAssert);
        };
        Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
            return writeDouble(this, value, offset, true, noAssert);
        };
        Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
            return writeDouble(this, value, offset, false, noAssert);
        };
        Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
            if (!start)
                start = 0;
            if (!end && end !== 0)
                end = this.length;
            if (targetStart >= target.length)
                targetStart = target.length;
            if (!targetStart)
                targetStart = 0;
            if (end > 0 && end < start)
                end = start;
            if (end === start)
                return 0;
            if (target.length === 0 || this.length === 0)
                return 0;
            if (targetStart < 0) {
                throw new RangeError("targetStart out of bounds");
            }
            if (start < 0 || start >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (end < 0)
                throw new RangeError("sourceEnd out of bounds");
            if (end > this.length)
                end = this.length;
            if (target.length - targetStart < end - start) {
                end = target.length - targetStart + start;
            }
            var len = end - start;
            var i;
            if (this === target && start < targetStart && targetStart < end) {
                for (i = len - 1; i >= 0; --i) {
                    target[i + targetStart] = this[i + start];
                }
            } else if (len < 1e3 || !Buffer2.TYPED_ARRAY_SUPPORT) {
                for (i = 0; i < len; ++i) {
                    target[i + targetStart] = this[i + start];
                }
            } else {
                Uint8Array.prototype.set.call(
                    target,
                    this.subarray(start, start + len),
                    targetStart
                );
            }
            return len;
        };
        Buffer2.prototype.fill = function fill(val, start, end, encoding) {
            if (typeof val === "string") {
                if (typeof start === "string") {
                    encoding = start;
                    start = 0;
                    end = this.length;
                } else if (typeof end === "string") {
                    encoding = end;
                    end = this.length;
                }
                if (val.length === 1) {
                    var code = val.charCodeAt(0);
                    if (code < 256) {
                        val = code;
                    }
                }
                if (encoding !== void 0 && typeof encoding !== "string") {
                    throw new TypeError("encoding must be a string");
                }
                if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
                    throw new TypeError("Unknown encoding: " + encoding);
                }
            } else if (typeof val === "number") {
                val = val & 255;
            }
            if (start < 0 || this.length < start || this.length < end) {
                throw new RangeError("Out of range index");
            }
            if (end <= start) {
                return this;
            }
            start = start >>> 0;
            end = end === void 0 ? this.length : end >>> 0;
            if (!val)
                val = 0;
            var i;
            if (typeof val === "number") {
                for (i = start; i < end; ++i) {
                    this[i] = val;
                }
            } else {
                var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer2(val, encoding).toString());
                var len = bytes.length;
                for (i = 0; i < end - start; ++i) {
                    this[i + start] = bytes[i % len];
                }
            }
            return this;
        };
        INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    }
});

// node_modules/@esbuild-plugins/node-globals-polyfill/_buffer.js
var init_buffer = __esm({
    "node_modules/@esbuild-plugins/node-globals-polyfill/_buffer.js"() {
        init_Buffer();
    }
});

// node-modules-polyfills:crypto
var crypto_exports = {};
__export(crypto_exports, {
    default: () => crypto_default
});
var crypto_default;
var init_crypto = __esm({
    "node-modules-polyfills:crypto"() {
        init_virtual_process_polyfill();
        init_buffer();
        crypto_default = {};
    }
});

// node-modules-polyfills-commonjs:crypto
var require_crypto = __commonJS({
    "node-modules-polyfills-commonjs:crypto"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        var polyfill = (init_crypto(), __toCommonJS(crypto_exports));
        if (polyfill && polyfill.default) {
            module.exports = polyfill.default;
            for (let k in polyfill) {
                module.exports[k] = polyfill[k];
            }
        } else if (polyfill) {
            module.exports = polyfill;
        }
    }
});

// node_modules/crypto-js/core.js
var require_core = __commonJS({
    "node_modules/crypto-js/core.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory();
            } else if (typeof define === "function" && define.amd) {
                define([], factory);
            } else {
                root.CryptoJS = factory();
            }
        })(exports, function() {
            var CryptoJS = CryptoJS || function(Math2, undefined2) {
                var crypto;
                if (typeof window !== "undefined" && window.crypto) {
                    crypto = window.crypto;
                }
                if (typeof self !== "undefined" && self.crypto) {
                    crypto = self.crypto;
                }
                if (typeof globalThis !== "undefined" && globalThis.crypto) {
                    crypto = globalThis.crypto;
                }
                if (!crypto && typeof window !== "undefined" && window.msCrypto) {
                    crypto = window.msCrypto;
                }
                if (!crypto && typeof globalThis !== "undefined" && globalThis.crypto) {
                    crypto = globalThis.crypto;
                }
                if (!crypto && typeof __require === "function") {
                    try {
                        crypto = require_crypto();
                    } catch (err) {
                    }
                }
                var cryptoSecureRandomInt = function() {
                    if (crypto) {
                        if (typeof crypto.getRandomValues === "function") {
                            try {
                                return crypto.getRandomValues(new Uint32Array(1))[0];
                            } catch (err) {
                            }
                        }
                        if (typeof crypto.randomBytes === "function") {
                            try {
                                return crypto.randomBytes(4).readInt32LE();
                            } catch (err) {
                            }
                        }
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.");
                };
                var create = Object.create || function() {
                    function F() {
                    }
                    return function(obj) {
                        var subtype;
                        F.prototype = obj;
                        subtype = new F();
                        F.prototype = null;
                        return subtype;
                    };
                }();
                var C = {};
                var C_lib = C.lib = {};
                var Base = C_lib.Base = function() {
                    return {
                        extend: function(overrides) {
                            var subtype = create(this);
                            if (overrides) {
                                subtype.mixIn(overrides);
                            }
                            if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                                subtype.init = function() {
                                    subtype.$super.init.apply(this, arguments);
                                };
                            }
                            subtype.init.prototype = subtype;
                            subtype.$super = this;
                            return subtype;
                        },
                        create: function() {
                            var instance = this.extend();
                            instance.init.apply(instance, arguments);
                            return instance;
                        },
                        init: function() {
                        },
                        mixIn: function(properties) {
                            for (var propertyName in properties) {
                                if (properties.hasOwnProperty(propertyName)) {
                                    this[propertyName] = properties[propertyName];
                                }
                            }
                            if (properties.hasOwnProperty("toString")) {
                                this.toString = properties.toString;
                            }
                        },
                        clone: function() {
                            return this.init.prototype.extend(this);
                        }
                    };
                }();
                var WordArray = C_lib.WordArray = Base.extend({
                    init: function(words, sigBytes) {
                        words = this.words = words || [];
                        if (sigBytes != undefined2) {
                            this.sigBytes = sigBytes;
                        } else {
                            this.sigBytes = words.length * 4;
                        }
                    },
                    toString: function(encoder) {
                        return (encoder || Hex).stringify(this);
                    },
                    concat: function(wordArray) {
                        var thisWords = this.words;
                        var thatWords = wordArray.words;
                        var thisSigBytes = this.sigBytes;
                        var thatSigBytes = wordArray.sigBytes;
                        this.clamp();
                        if (thisSigBytes % 4) {
                            for (var i = 0; i < thatSigBytes; i++) {
                                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                            }
                        } else {
                            for (var j = 0; j < thatSigBytes; j += 4) {
                                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                            }
                        }
                        this.sigBytes += thatSigBytes;
                        return this;
                    },
                    clamp: function() {
                        var words = this.words;
                        var sigBytes = this.sigBytes;
                        words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
                        words.length = Math2.ceil(sigBytes / 4);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        clone.words = this.words.slice(0);
                        return clone;
                    },
                    random: function(nBytes) {
                        var words = [];
                        for (var i = 0; i < nBytes; i += 4) {
                            words.push(cryptoSecureRandomInt());
                        }
                        return new WordArray.init(words, nBytes);
                    }
                });
                var C_enc = C.enc = {};
                var Hex = C_enc.Hex = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var hexChars = [];
                        for (var i = 0; i < sigBytes; i++) {
                            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            hexChars.push((bite >>> 4).toString(16));
                            hexChars.push((bite & 15).toString(16));
                        }
                        return hexChars.join("");
                    },
                    parse: function(hexStr) {
                        var hexStrLength = hexStr.length;
                        var words = [];
                        for (var i = 0; i < hexStrLength; i += 2) {
                            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                        }
                        return new WordArray.init(words, hexStrLength / 2);
                    }
                };
                var Latin1 = C_enc.Latin1 = {
                    stringify: function(wordArray) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var latin1Chars = [];
                        for (var i = 0; i < sigBytes; i++) {
                            var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            latin1Chars.push(String.fromCharCode(bite));
                        }
                        return latin1Chars.join("");
                    },
                    parse: function(latin1Str) {
                        var latin1StrLength = latin1Str.length;
                        var words = [];
                        for (var i = 0; i < latin1StrLength; i++) {
                            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                        }
                        return new WordArray.init(words, latin1StrLength);
                    }
                };
                var Utf8 = C_enc.Utf8 = {
                    stringify: function(wordArray) {
                        try {
                            return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data");
                        }
                    },
                    parse: function(utf8Str) {
                        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
                    }
                };
                var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                    reset: function() {
                        this._data = new WordArray.init();
                        this._nDataBytes = 0;
                    },
                    _append: function(data) {
                        if (typeof data == "string") {
                            data = Utf8.parse(data);
                        }
                        this._data.concat(data);
                        this._nDataBytes += data.sigBytes;
                    },
                    _process: function(doFlush) {
                        var processedWords;
                        var data = this._data;
                        var dataWords = data.words;
                        var dataSigBytes = data.sigBytes;
                        var blockSize = this.blockSize;
                        var blockSizeBytes = blockSize * 4;
                        var nBlocksReady = dataSigBytes / blockSizeBytes;
                        if (doFlush) {
                            nBlocksReady = Math2.ceil(nBlocksReady);
                        } else {
                            nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
                        }
                        var nWordsReady = nBlocksReady * blockSize;
                        var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
                        if (nWordsReady) {
                            for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                                this._doProcessBlock(dataWords, offset);
                            }
                            processedWords = dataWords.splice(0, nWordsReady);
                            data.sigBytes -= nBytesReady;
                        }
                        return new WordArray.init(processedWords, nBytesReady);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        clone._data = this._data.clone();
                        return clone;
                    },
                    _minBufferSize: 0
                });
                var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
                    cfg: Base.extend(),
                    init: function(cfg) {
                        this.cfg = this.cfg.extend(cfg);
                        this.reset();
                    },
                    reset: function() {
                        BufferedBlockAlgorithm.reset.call(this);
                        this._doReset();
                    },
                    update: function(messageUpdate) {
                        this._append(messageUpdate);
                        this._process();
                        return this;
                    },
                    finalize: function(messageUpdate) {
                        if (messageUpdate) {
                            this._append(messageUpdate);
                        }
                        var hash = this._doFinalize();
                        return hash;
                    },
                    blockSize: 512 / 32,
                    _createHelper: function(hasher) {
                        return function(message, cfg) {
                            return new hasher.init(cfg).finalize(message);
                        };
                    },
                    _createHmacHelper: function(hasher) {
                        return function(message, key) {
                            return new C_algo.HMAC.init(hasher, key).finalize(message);
                        };
                    }
                });
                var C_algo = C.algo = {};
                return C;
            }(Math);
            return CryptoJS;
        });
    }
});

// node_modules/crypto-js/x64-core.js
var require_x64_core = __commonJS({
    "node_modules/crypto-js/x64-core.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require_core());
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        })(exports, function(CryptoJS) {
            (function(undefined2) {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var X32WordArray = C_lib.WordArray;
                var C_x64 = C.x64 = {};
                var X64Word = C_x64.Word = Base.extend({
                    init: function(high, low) {
                        this.high = high;
                        this.low = low;
                    }
                });
                var X64WordArray = C_x64.WordArray = Base.extend({
                    init: function(words, sigBytes) {
                        words = this.words = words || [];
                        if (sigBytes != undefined2) {
                            this.sigBytes = sigBytes;
                        } else {
                            this.sigBytes = words.length * 8;
                        }
                    },
                    toX32: function() {
                        var x64Words = this.words;
                        var x64WordsLength = x64Words.length;
                        var x32Words = [];
                        for (var i = 0; i < x64WordsLength; i++) {
                            var x64Word = x64Words[i];
                            x32Words.push(x64Word.high);
                            x32Words.push(x64Word.low);
                        }
                        return X32WordArray.create(x32Words, this.sigBytes);
                    },
                    clone: function() {
                        var clone = Base.clone.call(this);
                        var words = clone.words = this.words.slice(0);
                        var wordsLength = words.length;
                        for (var i = 0; i < wordsLength; i++) {
                            words[i] = words[i].clone();
                        }
                        return clone;
                    }
                });
            })();
            return CryptoJS;
        });
    }
});

// node_modules/crypto-js/sha512.js
var require_sha512 = __commonJS({
    "node_modules/crypto-js/sha512.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require_core(), require_x64_core());
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        })(exports, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Hasher = C_lib.Hasher;
                var C_x64 = C.x64;
                var X64Word = C_x64.Word;
                var X64WordArray = C_x64.WordArray;
                var C_algo = C.algo;
                function X64Word_create() {
                    return X64Word.create.apply(X64Word, arguments);
                }
                var K = [
                    X64Word_create(1116352408, 3609767458),
                    X64Word_create(1899447441, 602891725),
                    X64Word_create(3049323471, 3964484399),
                    X64Word_create(3921009573, 2173295548),
                    X64Word_create(961987163, 4081628472),
                    X64Word_create(1508970993, 3053834265),
                    X64Word_create(2453635748, 2937671579),
                    X64Word_create(2870763221, 3664609560),
                    X64Word_create(3624381080, 2734883394),
                    X64Word_create(310598401, 1164996542),
                    X64Word_create(607225278, 1323610764),
                    X64Word_create(1426881987, 3590304994),
                    X64Word_create(1925078388, 4068182383),
                    X64Word_create(2162078206, 991336113),
                    X64Word_create(2614888103, 633803317),
                    X64Word_create(3248222580, 3479774868),
                    X64Word_create(3835390401, 2666613458),
                    X64Word_create(4022224774, 944711139),
                    X64Word_create(264347078, 2341262773),
                    X64Word_create(604807628, 2007800933),
                    X64Word_create(770255983, 1495990901),
                    X64Word_create(1249150122, 1856431235),
                    X64Word_create(1555081692, 3175218132),
                    X64Word_create(1996064986, 2198950837),
                    X64Word_create(2554220882, 3999719339),
                    X64Word_create(2821834349, 766784016),
                    X64Word_create(2952996808, 2566594879),
                    X64Word_create(3210313671, 3203337956),
                    X64Word_create(3336571891, 1034457026),
                    X64Word_create(3584528711, 2466948901),
                    X64Word_create(113926993, 3758326383),
                    X64Word_create(338241895, 168717936),
                    X64Word_create(666307205, 1188179964),
                    X64Word_create(773529912, 1546045734),
                    X64Word_create(1294757372, 1522805485),
                    X64Word_create(1396182291, 2643833823),
                    X64Word_create(1695183700, 2343527390),
                    X64Word_create(1986661051, 1014477480),
                    X64Word_create(2177026350, 1206759142),
                    X64Word_create(2456956037, 344077627),
                    X64Word_create(2730485921, 1290863460),
                    X64Word_create(2820302411, 3158454273),
                    X64Word_create(3259730800, 3505952657),
                    X64Word_create(3345764771, 106217008),
                    X64Word_create(3516065817, 3606008344),
                    X64Word_create(3600352804, 1432725776),
                    X64Word_create(4094571909, 1467031594),
                    X64Word_create(275423344, 851169720),
                    X64Word_create(430227734, 3100823752),
                    X64Word_create(506948616, 1363258195),
                    X64Word_create(659060556, 3750685593),
                    X64Word_create(883997877, 3785050280),
                    X64Word_create(958139571, 3318307427),
                    X64Word_create(1322822218, 3812723403),
                    X64Word_create(1537002063, 2003034995),
                    X64Word_create(1747873779, 3602036899),
                    X64Word_create(1955562222, 1575990012),
                    X64Word_create(2024104815, 1125592928),
                    X64Word_create(2227730452, 2716904306),
                    X64Word_create(2361852424, 442776044),
                    X64Word_create(2428436474, 593698344),
                    X64Word_create(2756734187, 3733110249),
                    X64Word_create(3204031479, 2999351573),
                    X64Word_create(3329325298, 3815920427),
                    X64Word_create(3391569614, 3928383900),
                    X64Word_create(3515267271, 566280711),
                    X64Word_create(3940187606, 3454069534),
                    X64Word_create(4118630271, 4000239992),
                    X64Word_create(116418474, 1914138554),
                    X64Word_create(174292421, 2731055270),
                    X64Word_create(289380356, 3203993006),
                    X64Word_create(460393269, 320620315),
                    X64Word_create(685471733, 587496836),
                    X64Word_create(852142971, 1086792851),
                    X64Word_create(1017036298, 365543100),
                    X64Word_create(1126000580, 2618297676),
                    X64Word_create(1288033470, 3409855158),
                    X64Word_create(1501505948, 4234509866),
                    X64Word_create(1607167915, 987167468),
                    X64Word_create(1816402316, 1246189591)
                ];
                var W = [];
                (function() {
                    for (var i = 0; i < 80; i++) {
                        W[i] = X64Word_create();
                    }
                })();
                var SHA512 = C_algo.SHA512 = Hasher.extend({
                    _doReset: function() {
                        this._hash = new X64WordArray.init([
                            new X64Word.init(1779033703, 4089235720),
                            new X64Word.init(3144134277, 2227873595),
                            new X64Word.init(1013904242, 4271175723),
                            new X64Word.init(2773480762, 1595750129),
                            new X64Word.init(1359893119, 2917565137),
                            new X64Word.init(2600822924, 725511199),
                            new X64Word.init(528734635, 4215389547),
                            new X64Word.init(1541459225, 327033209)
                        ]);
                    },
                    _doProcessBlock: function(M, offset) {
                        var H = this._hash.words;
                        var H0 = H[0];
                        var H1 = H[1];
                        var H2 = H[2];
                        var H3 = H[3];
                        var H4 = H[4];
                        var H5 = H[5];
                        var H6 = H[6];
                        var H7 = H[7];
                        var H0h = H0.high;
                        var H0l = H0.low;
                        var H1h = H1.high;
                        var H1l = H1.low;
                        var H2h = H2.high;
                        var H2l = H2.low;
                        var H3h = H3.high;
                        var H3l = H3.low;
                        var H4h = H4.high;
                        var H4l = H4.low;
                        var H5h = H5.high;
                        var H5l = H5.low;
                        var H6h = H6.high;
                        var H6l = H6.low;
                        var H7h = H7.high;
                        var H7l = H7.low;
                        var ah = H0h;
                        var al = H0l;
                        var bh = H1h;
                        var bl = H1l;
                        var ch = H2h;
                        var cl = H2l;
                        var dh = H3h;
                        var dl = H3l;
                        var eh = H4h;
                        var el = H4l;
                        var fh = H5h;
                        var fl = H5l;
                        var gh = H6h;
                        var gl = H6l;
                        var hh = H7h;
                        var hl = H7l;
                        for (var i = 0; i < 80; i++) {
                            var Wil;
                            var Wih;
                            var Wi = W[i];
                            if (i < 16) {
                                Wih = Wi.high = M[offset + i * 2] | 0;
                                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                            } else {
                                var gamma0x = W[i - 15];
                                var gamma0xh = gamma0x.high;
                                var gamma0xl = gamma0x.low;
                                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                                var gamma1x = W[i - 2];
                                var gamma1xh = gamma1x.high;
                                var gamma1xl = gamma1x.low;
                                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                                var Wi7 = W[i - 7];
                                var Wi7h = Wi7.high;
                                var Wi7l = Wi7.low;
                                var Wi16 = W[i - 16];
                                var Wi16h = Wi16.high;
                                var Wi16l = Wi16.low;
                                Wil = gamma0l + Wi7l;
                                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                                Wil = Wil + gamma1l;
                                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                                Wil = Wil + Wi16l;
                                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                                Wi.high = Wih;
                                Wi.low = Wil;
                            }
                            var chh = eh & fh ^ ~eh & gh;
                            var chl = el & fl ^ ~el & gl;
                            var majh = ah & bh ^ ah & ch ^ bh & ch;
                            var majl = al & bl ^ al & cl ^ bl & cl;
                            var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
                            var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
                            var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
                            var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
                            var Ki = K[i];
                            var Kih = Ki.high;
                            var Kil = Ki.low;
                            var t1l = hl + sigma1l;
                            var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                            var t1l = t1l + chl;
                            var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                            var t1l = t1l + Kil;
                            var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                            var t1l = t1l + Wil;
                            var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
                            var t2l = sigma0l + majl;
                            var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
                            hh = gh;
                            hl = gl;
                            gh = fh;
                            gl = fl;
                            fh = eh;
                            fl = el;
                            el = dl + t1l | 0;
                            eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
                            dh = ch;
                            dl = cl;
                            ch = bh;
                            cl = bl;
                            bh = ah;
                            bl = al;
                            al = t1l + t2l | 0;
                            ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
                        }
                        H0l = H0.low = H0l + al;
                        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
                        H1l = H1.low = H1l + bl;
                        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
                        H2l = H2.low = H2l + cl;
                        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
                        H3l = H3.low = H3l + dl;
                        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
                        H4l = H4.low = H4l + el;
                        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
                        H5l = H5.low = H5l + fl;
                        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
                        H6l = H6.low = H6l + gl;
                        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
                        H7l = H7.low = H7l + hl;
                        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
                    },
                    _doFinalize: function() {
                        var data = this._data;
                        var dataWords = data.words;
                        var nBitsTotal = this._nDataBytes * 8;
                        var nBitsLeft = data.sigBytes * 8;
                        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
                        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
                        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
                        data.sigBytes = dataWords.length * 4;
                        this._process();
                        var hash = this._hash.toX32();
                        return hash;
                    },
                    clone: function() {
                        var clone = Hasher.clone.call(this);
                        clone._hash = this._hash.clone();
                        return clone;
                    },
                    blockSize: 1024 / 32
                });
                C.SHA512 = Hasher._createHelper(SHA512);
                C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
            })();
            return CryptoJS.SHA512;
        });
    }
});

// node_modules/crypto-js/hmac.js
var require_hmac = __commonJS({
    "node_modules/crypto-js/hmac.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require_core());
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        })(exports, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var Base = C_lib.Base;
                var C_enc = C.enc;
                var Utf8 = C_enc.Utf8;
                var C_algo = C.algo;
                var HMAC = C_algo.HMAC = Base.extend({
                    init: function(hasher, key) {
                        hasher = this._hasher = new hasher.init();
                        if (typeof key == "string") {
                            key = Utf8.parse(key);
                        }
                        var hasherBlockSize = hasher.blockSize;
                        var hasherBlockSizeBytes = hasherBlockSize * 4;
                        if (key.sigBytes > hasherBlockSizeBytes) {
                            key = hasher.finalize(key);
                        }
                        key.clamp();
                        var oKey = this._oKey = key.clone();
                        var iKey = this._iKey = key.clone();
                        var oKeyWords = oKey.words;
                        var iKeyWords = iKey.words;
                        for (var i = 0; i < hasherBlockSize; i++) {
                            oKeyWords[i] ^= 1549556828;
                            iKeyWords[i] ^= 909522486;
                        }
                        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
                        this.reset();
                    },
                    reset: function() {
                        var hasher = this._hasher;
                        hasher.reset();
                        hasher.update(this._iKey);
                    },
                    update: function(messageUpdate) {
                        this._hasher.update(messageUpdate);
                        return this;
                    },
                    finalize: function(messageUpdate) {
                        var hasher = this._hasher;
                        var innerHash = hasher.finalize(messageUpdate);
                        hasher.reset();
                        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
                        return hmac;
                    }
                });
            })();
        });
    }
});

// node_modules/crypto-js/hmac-sha512.js
var require_hmac_sha512 = __commonJS({
    "node_modules/crypto-js/hmac-sha512.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory, undef) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require_core(), require_x64_core(), require_sha512(), require_hmac());
            } else if (typeof define === "function" && define.amd) {
                define(["./core", "./x64-core", "./sha512", "./hmac"], factory);
            } else {
                factory(root.CryptoJS);
            }
        })(exports, function(CryptoJS) {
            return CryptoJS.HmacSHA512;
        });
    }
});

// node_modules/crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
    "node_modules/crypto-js/enc-base64url.js"(exports, module) {
        init_virtual_process_polyfill();
        init_buffer();
        (function(root, factory) {
            if (typeof exports === "object") {
                module.exports = exports = factory(require_core());
            } else if (typeof define === "function" && define.amd) {
                define(["./core"], factory);
            } else {
                factory(root.CryptoJS);
            }
        })(exports, function(CryptoJS) {
            (function() {
                var C = CryptoJS;
                var C_lib = C.lib;
                var WordArray = C_lib.WordArray;
                var C_enc = C.enc;
                var Base64url = C_enc.Base64url = {
                    stringify: function(wordArray, urlSafe = true) {
                        var words = wordArray.words;
                        var sigBytes = wordArray.sigBytes;
                        var map = urlSafe ? this._safe_map : this._map;
                        wordArray.clamp();
                        var base64Chars = [];
                        for (var i = 0; i < sigBytes; i += 3) {
                            var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                            var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                            var triplet = byte1 << 16 | byte2 << 8 | byte3;
                            for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                            }
                        }
                        var paddingChar = map.charAt(64);
                        if (paddingChar) {
                            while (base64Chars.length % 4) {
                                base64Chars.push(paddingChar);
                            }
                        }
                        return base64Chars.join("");
                    },
                    parse: function(base64Str, urlSafe = true) {
                        var base64StrLength = base64Str.length;
                        var map = urlSafe ? this._safe_map : this._map;
                        var reverseMap = this._reverseMap;
                        if (!reverseMap) {
                            reverseMap = this._reverseMap = [];
                            for (var j = 0; j < map.length; j++) {
                                reverseMap[map.charCodeAt(j)] = j;
                            }
                        }
                        var paddingChar = map.charAt(64);
                        if (paddingChar) {
                            var paddingIndex = base64Str.indexOf(paddingChar);
                            if (paddingIndex !== -1) {
                                base64StrLength = paddingIndex;
                            }
                        }
                        return parseLoop(base64Str, base64StrLength, reverseMap);
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                };
                function parseLoop(base64Str, base64StrLength, reverseMap) {
                    var words = [];
                    var nBytes = 0;
                    for (var i = 0; i < base64StrLength; i++) {
                        if (i % 4) {
                            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                            var bitsCombined = bits1 | bits2;
                            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                            nBytes++;
                        }
                    }
                    return WordArray.create(words, nBytes);
                }
            })();
            return CryptoJS.enc.Base64url;
        });
    }
});

// src/index.ts
init_virtual_process_polyfill();
init_buffer();

// src/handleDownload.ts
init_virtual_process_polyfill();
init_buffer();

// src/verify.ts
init_virtual_process_polyfill();
init_buffer();
var import_hmac_sha512 = __toESM(require_hmac_sha512());
var import_enc_base64url = __toESM(require_enc_base64url());
var verify = (data, sign) => {
    const signSlice = sign.split(":");
    if (!signSlice[signSlice.length - 1]) {
        return "expire missing";
    }
    const expire = parseInt(signSlice[signSlice.length - 1]);
    if (isNaN(expire)) {
        return "expire invalid";
    }
    if (expire < Date.now()) {
        return "expire expired";
    }
    const right = import_enc_base64url.default.stringify((0, import_hmac_sha512.default)(`${data}:${expire}`, TOKEN));
    if (sign !== right) {
        return "sign mismatch";
    }
    return "";
};

// src/handleDownload.ts
async function handleDownload(request) {
    const origin = request.headers.get("origin") ?? "*";
    const url = new URL(request.url);
    const path = decodeURI(url.pathname);
    const sign = url.searchParams.get("sign") ?? "";
    const name = path.split("/").pop() ?? "";
    const verifyResult = verify(name, sign);
    if (verifyResult !== "") {
        const resp2 = new Response(
            JSON.stringify({
                code: 401,
                message: `sign mismatch`
            }),
            {
                headers: {
                    "content-type": "application/json;charset=UTF-8"
                }
            }
        );
        resp2.headers.set("Access-Control-Allow-Origin", origin);
        return resp2;
    }
    let resp = await fetch(`${ADDRESS}/api/fs/link`, {
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            Authorization: TOKEN
        },
        body: JSON.stringify({
            path
        })
    });
    let res = await resp.json();
    if (res.code !== 200) {
        return new Response(JSON.stringify(res));
    }
    request = new Request(res.data.url, request);
    if (res.data.header) {
        for (const k in res.data.header) {
            for (const v of res.data.header[k]) {
                request.headers.set(k, v);
            }
        }
    }
    let response = await fetch(request);
    response = new Response(response.body, response);
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.append("Vary", "Origin");
    return response;
}

// src/handleOptions.ts
init_virtual_process_polyfill();
init_buffer();
function handleOptions(request) {
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400"
    };
    let headers = request.headers;
    if (headers.get("Origin") !== null && headers.get("Access-Control-Request-Method") !== null) {
        let respHeaders = {
            ...corsHeaders,
            "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers") || ""
        };
        return new Response(null, {
            headers: respHeaders
        });
    } else {
        return new Response(null, {
            headers: {
                Allow: "GET, HEAD, POST, OPTIONS"
            }
        });
    }
}

// src/index.ts
var src_default = {
    async fetch(request, env2, ctx) {
        if (request.method === "OPTIONS") {
            return handleOptions(request);
        }
        return handleDownload(request);
    }
};
export {
    src_default as default
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=index.js.map
