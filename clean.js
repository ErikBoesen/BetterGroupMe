function openSearch() {
    // Container for the entire conversation
    let chat = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;


}

ready('.chat-menu', function(element) {
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

ready('.composer-wrapper', function(element) {
    let searchBox = document.createElement('div');
    searchBox.id = 'search-composer';
    // TODO: build this with DOM manipulation
    searchBox.innerHTML = '<div class="composer-wrapper"><div role="textbox" class="emoji-wysiwyg-editor" contenteditable="true" placeholder="Search..."></div></div>';
    searchBox.innerHTML += '<div class="controls controls-left"><button type="button" class="emoji-button composer-btn accessible-focus"><i class="gmn-icon-search"></i></button></div>';
    let composer = chat.getElementsByClassName('composer-wrapper')[0];
    console.log(composer);
    composer.parentNode.insertBefore(searchBox, composer);
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

