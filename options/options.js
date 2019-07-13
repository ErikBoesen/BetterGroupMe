const browser = window.browser || window.chrome;

function save() {
    browser.storage.sync.set({
        // key: document.getElementById('key').checked/.value,
        custom_css: document.getElementById('custom_css').value,
    }, function() {
        console.log('Options saved.');
    });
}

oninput = save;

browser.storage.sync.get({
    // key: default,
    custom_css: '',
}, function(items) {
    // document.getElementById('key').checked/.value = items.key;
    document.getElementById('custom_css').value = items.custom_css;
});
