"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padStart(source, maxLength, pad) {
    source = String(source);
    if (!maxLength || !isFinite(maxLength) || source.length >= maxLength) {
        return source;
    }
    return _pad(maxLength - source.length, pad) + source;
}
exports.padStart = padStart;
function padEnd(source, maxLength, pad) {
    source = String(source);
    if (!maxLength || !isFinite(maxLength) || source.length >= maxLength) {
        return source;
    }
    return source + _pad(maxLength - source.length, pad);
}
exports.padEnd = padEnd;
function _pad(padLength, pad) {
    pad = pad === undefined || pad === null || pad === '' ? ' ' : String(pad);
    var paddings = pad;
    while (paddings.length < padLength) {
        paddings += pad;
    }
    return paddings.substr(0, padLength);
}
function firstNumberOf() {
    for (var i = 0, len = arguments.length; i < len; ++i) {
        var value = arguments[i];
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string') {
            var parsed = parseFloat(value);
            if (isFinite(parsed)) {
                return parsed;
            }
        }
    }
    return undefined;
}
exports.firstNumberOf = firstNumberOf;
exports.SECOND_IN_MILLISECONDS = 1000;
exports.MINUTE_IN_MILLISECONDS = exports.SECOND_IN_MILLISECONDS * 60;
exports.HOUR_IN_MILLISECONDS = exports.MINUTE_IN_MILLISECONDS * 60;
exports.HALF_DAY_IN_MILLISECONDS = exports.HOUR_IN_MILLISECONDS * 12;
exports.DAY_IN_MILLISECONDS = exports.HOUR_IN_MILLISECONDS * 24;
function normalizeMillisecondsInOneDay(milliseconds) {
    var value = Math.floor(milliseconds) % exports.DAY_IN_MILLISECONDS;
    return value >= 0 ? value : value + exports.DAY_IN_MILLISECONDS;
}
exports.normalizeMillisecondsInOneDay = normalizeMillisecondsInOneDay;
function am(milliseconds) {
    return milliseconds >= exports.HALF_DAY_IN_MILLISECONDS ? milliseconds - exports.HALF_DAY_IN_MILLISECONDS : milliseconds;
}
exports.am = am;
function pm(milliseconds) {
    return milliseconds < exports.HALF_DAY_IN_MILLISECONDS ? milliseconds + exports.HALF_DAY_IN_MILLISECONDS : milliseconds;
}
exports.pm = pm;
function ampm(milliseconds, a) {
    milliseconds = normalizeMillisecondsInOneDay(milliseconds);
    switch (String(a).toLowerCase()) {
        case 'am': return am(milliseconds);
        case 'pm': return pm(milliseconds);
        default: return milliseconds;
    }
}
exports.ampm = ampm;