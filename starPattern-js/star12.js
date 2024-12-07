function star12(n) {
    const container = document.getElementById('star-container');
    container.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= n - 1; i++) {
        let temp = '';
        for (let j = 1; j <= i; j++) temp += '*';
        for (let j = 1; j <= (n - i) * 2 - 1; j++) temp += ' ';
        for (let j = 1; j <= i; j++) temp += '*';
        container.innerHTML += temp + '\n';
    }

    let temp = '';
    for (let j = 1; j <= 2 * n - 1; j++) temp += '*';
    container.innerHTML += temp + '\n';

    for (let i = n - 1; i >= 1; i--) {
        temp = '';
        for (let j = 1; j <= i; j++) temp += '*';
        for (let j = 1; j <= (n - i) * 2 - 1; j++) temp += ' ';
        for (let j = 1; j <= i; j++) temp += '*';
        container.innerHTML += temp + '\n';
    }
}

star12(9);