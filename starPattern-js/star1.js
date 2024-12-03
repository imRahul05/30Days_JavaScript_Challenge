function star1(n) {
    const container = document.getElementById('star-container');
    container.innerHTML = ''
    for (let i = 0; i < n; i++) {
        let temp = '';
        for (let j = 0; j < n; j++) {
            temp += '*';
        }
        container.innerHTML += temp + '\n';
    }
}

star1(5)