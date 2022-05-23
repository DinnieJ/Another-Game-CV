window.onbeforeprint = (event: Event) => {
    event.stopImmediatePropagation();
    alert("Whoa, hold right there");
}
(async () => {
    const app = await import('./app');
    app.default();
})();