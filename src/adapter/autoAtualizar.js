let lastHash

const fetchJsText = () => {
    return fetch('./bundle.hash')
        .then(response => response.text())
}

const reloadBasedOnTextChange = (hash) => {
    if (lastHash != hash && lastHash != undefined) {
        location.reload()
    }
    if (lastHash != hash) {
        lastHash = hash
    }
}

export default function autoAtualizar() {
    setInterval(() => {
        fetchJsText()
            .then(reloadBasedOnTextChange)
    }, 60*1000)
}