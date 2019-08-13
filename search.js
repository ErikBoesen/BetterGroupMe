function log(content) {
    console.log('BETTERGROUPME:', content);
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
const GROUPME_TOKEN = getCookie('token');
log('token ' + GROUPME_TOKEN);

(function () {
  const DB_NAME = 'bgm';
  const DB_VERSION = 1; // Use a long long for this value (don't use a float)
  const DB_STORE_NAME = 'publications';

  var db;

  function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Equal to: db = req.result;
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
    };
  }

  /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  function getBlob(key, store, success_callback) {
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var value = evt.target.result;
      if (value)
        success_callback(value.blob);
    };
  }

  openDb();



})();

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
    searchBox.innerHTML = '<div class='composer-wrapper'><div role='textbox' class='emoji-wysiwyg-editor' contenteditable='true' placeholder='Search...'></div></div>';
    searchBox.innerHTML += '<div class='controls controls-left'><button type='button' class=''><i class='gmn-icon-search'></i></button></div>';
    let composer = chat.getElementsByClassName('composer-wrapper')[0];
    composer.parentNode.insertBefore(searchBox, composer);
});
*/
