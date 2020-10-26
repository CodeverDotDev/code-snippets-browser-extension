//set browser action
browser.browserAction.onClicked.addListener(launchBookmarksDevDialog);

function launchBookmarksDevDialog () {
  browser.tabs.executeScript({
    file: 'launch-bookmarksdev-dialog.js'
  })
}

//same action when text selection and right click and save
browser.contextMenus.create({
  id: 'save-code-to-bookmarksdev',
  title: 'Save code to Bookmarks.dev',
  contexts: ['selection'],
})

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'save-code-to-bookmarksdev') {
    launchBookmarksDevDialog();
  }
})
