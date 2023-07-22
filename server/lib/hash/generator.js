module.exports = (texto) => {
    let hash = 0, i, chr
    if (texto.length === 0) return hash
    for (i = 0; i < texto.length; i++) {
        chr = texto.charCodeAt(i)
        hash = ((hash << 5) - hash) + chr
        hash |= 0
    }
    return hash
}