function log(content) {
    console.log('BETTERGROUPME:', content);
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
const GROUPME_TOKEN = getCookie('token');

function index(id) {
    log('indexing ' + id);
}

function openSearch() {
    // Container for the entire conversation
    let chat = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    // Get internal ID of the chat
    let id = chat.getElementsByClassName('gm-group-topic')[0].id.replace('group-topic-', '');

    let query = window.prompt('Enter your search query: ');
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

/*
// FIXME: this breaks everything because .composer-wrapper updates all the time
ready('.composer-wrapper', function(element) {
    let chat = element.parentElement.parentElement.parentElement;
    let searchBox = document.createElement('div');
    searchBox.id = 'search-composer';
    // TODO: build this with DOM manipulation
    searchBox.innerHTML = '<div class="composer-wrapper"><div role="textbox" class="emoji-wysiwyg-editor" contenteditable="true" placeholder="Search..."></div></div>';
    searchBox.innerHTML += '<div class="controls controls-left"><button type="button" class=""><i class="gmn-icon-search"></i></button></div>';
    let composer = chat.getElementsByClassName('composer-wrapper')[0];
    composer.parentNode.insertBefore(searchBox, composer);
});
*/
