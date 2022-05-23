window.onbeforeprint = (event: Event) => {
    event.stopImmediatePropagation();
    alert("Whoa, hold right there");
}

// const test = require('./assets/kamae.json')

// console.log(test);
(async () => {
    const app = await import('./app');
    app.default();
})();