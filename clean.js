function openSearch() {
    console.log('This is where my search logic would go...');
    console.log('IF I HAD ANY');
}

ready('.chat-menu', function(element) {
    console.log(element);
    // Get button list
    let list = element.getElementsByClassName('list')[0];
    // Grab, then copy, the first button in list
    let firstButton = list.children[0];
    let searchButton = firstButton.cloneNode(true);
    // Turn this button into a search button
    searchButton.className = 'accessible-focus search section';
    searchButton.removeAttribute('ng-click')
    let icon = searchButton.getElementsByTagName('i')[0];
    icon.className = 'gmn-icon-' + 'search';
    let span = searchButton.getElementsByTagName('span')[0];
    span.textContent = 'Search';
    searchButton.onclick = openSearch;
    // Insert new search button into list
    firstButton.parentNode.insertBefore(searchButton, firstButton.nextSibling);
});

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

