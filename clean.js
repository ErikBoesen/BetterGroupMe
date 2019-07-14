const browser = window.browser || window.chrome;
browser.storage.sync.get(['custom_css'], function(items) {
    console.log('BetterGroupMe options loaded:');
    console.log(items);

    if (items.custom_css) {
        let style = document.createElement('style');
        style.innerHTML = items.custom_css;
        document.head.appendChild(style);
    }
});

