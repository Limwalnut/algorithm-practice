/**
 * @param {string} s
 * @return {boolean}
 */
let s = "{[]}"

var isValid = function(s) {
    if (s.length % 2 > 0) {
        return false
    }
    const iconMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    let sArr = s.split('')
    let temArr = []
    if (iconMap.get(sArr[0])) {
        return false
    }
    for (const icon of sArr) {
        let target = iconMap.get(icon)
        let length = temArr.length
        if (!target) {
            temArr.push(icon)
        } else {
            if (temArr[length - 1] === iconMap.get(icon)) {
                temArr.pop()
            } else {
                return false
            }
        }
    }
    if (temArr.length > 0) {
        return false
    }
    return true
};

isValid(s)
