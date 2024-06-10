const helper = {
    setPrefix(prefix, items) {
        const $set = {}
        Object.keys(items).forEach(k => {
            $set[prefix + k] = items[k]
        })
        return $set
    },
    setFields(rs, items) {
        const $set = {}
        Object.keys(items).forEach(k => {
            items[k] == 0 && delete rs[k]
        })
        return rs
    },
    GetDateTime() {
        var t = new Date();
        var day = t.getDate() < 10 ? "0" + t.getDate() : t.getDate();
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return day + ' ' + monthShortNames[(t.getMonth())] + ', ' + t.getFullYear() + ' ' + t.getHours() + ":" + t.getMinutes();
    }
}

module.exports = helper