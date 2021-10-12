"use strict";
exports.__esModule = true;
exports.deleteRegistryKey = exports.createRegistryKey = exports.listRegistrySubkeys = exports.setRegistryValue = exports.getRegistryValue = exports.getRegistryKey = exports.REG = exports.HK = void 0;
var HK;
(function (HK) {
    HK[HK["CR"] = 2147483648] = "CR";
    HK[HK["CU"] = 2147483649] = "CU";
    HK[HK["LM"] = 2147483650] = "LM";
    HK[HK["U"] = 2147483651] = "U";
    HK[HK["PD"] = 2147483652] = "PD";
    HK[HK["CC"] = 2147483653] = "CC";
    HK[HK["DD"] = 2147483654] = "DD";
})(HK = exports.HK || (exports.HK = {}));
var REG;
(function (REG) {
    REG[REG["SZ"] = 1] = "SZ";
    REG[REG["EXPAND_SZ"] = 2] = "EXPAND_SZ";
    REG[REG["BINARY"] = 3] = "BINARY";
    REG[REG["DWORD"] = 4] = "DWORD";
    REG[REG["DWORD_BIG_ENDIAN"] = 5] = "DWORD_BIG_ENDIAN";
    REG[REG["DWORD_LITTLE_ENDIAN"] = 4] = "DWORD_LITTLE_ENDIAN";
    REG[REG["LINK"] = 6] = "LINK";
    REG[REG["MULTI_SZ"] = 7] = "MULTI_SZ";
    REG[REG["RESOURCE_LIST"] = 8] = "RESOURCE_LIST";
})(REG = exports.REG || (exports.REG = {}));
var native;
function getNative() {
    if (process.platform !== "win32") {
        return;
    }
    if (!native) {
        native = require('./build/Release/native.node');
    }
    return native;
}
function getRegistryKey(root, path) {
    var _a;
    var ret = {};
    var key = (_a = getNative()) === null || _a === void 0 ? void 0 : _a.getKey(root, path);
    if (!key) {
        return null;
    }
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var value = key_1[_i];
        ret[value.name] = value;
    }
    return ret;
}
exports.getRegistryKey = getRegistryKey;
function getRegistryValue(root, path, name) {
    var key = getRegistryKey(root, path);
    if (!key || !key[name]) {
        return null;
    }
    return key[name].value;
}
exports.getRegistryValue = getRegistryValue;
function setRegistryValue(root, path, name, type, value) {
    var _a;
    return (_a = getNative()) === null || _a === void 0 ? void 0 : _a.setValue(root, path, type, name, value);
}
exports.setRegistryValue = setRegistryValue;
function listRegistrySubkeys(root, path) {
    var _a;
    return (_a = getNative()) === null || _a === void 0 ? void 0 : _a.listSubkeys(root, path);
}
exports.listRegistrySubkeys = listRegistrySubkeys;
function createRegistryKey(root, path) {
    var _a;
    return (_a = getNative()) === null || _a === void 0 ? void 0 : _a.createKey(root, path);
}
exports.createRegistryKey = createRegistryKey;
function deleteRegistryKey(root, path) {
    var _a;
    return (_a = getNative()) === null || _a === void 0 ? void 0 : _a.deleteKey(root, path);
}
exports.deleteRegistryKey = deleteRegistryKey;
