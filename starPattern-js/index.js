function star(n) {
    const container = document.getElementById('star-container');
    let temp = '';

    for (let i = 1; i <= n - 1; i++) {
        temp = '';
        for (let j = 1; j <= i; j++) temp += '*';
        for (let j = 1; j <= (n - i) * 2 - 1; j++) temp += ' ';
        for (let j = 1; j <= i; j++) temp += '*';
        container.innerHTML += temp + '\n';
    }

    temp = '';
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

star(5);