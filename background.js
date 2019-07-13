const FORM_URL = 'https://forms.gle/AK8WZF6bFcq3NzddA';
const browser = window.browser || window.chrome;

browser.runtime.onInstalled.addListener(function(details) {
    // Set uninstall URL if browser supports it
    if (browser.runtime.setUninstallURL)
        browser.runtime.setUninstallURL(FORM_URL);
});
