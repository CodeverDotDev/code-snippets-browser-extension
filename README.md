Save code to Bookmarks.dev Browser Extension
---
Browser extension to save code snippets to [www.bookmarks.dev](https://www.bookmarks.dev), 
the Bookmarks and Code Snippets Manager for Developers & Co. 

## Install
This browser extension is available for:

| ![Chrome](docs/img/logo/chrome-48.png) | ![Firefox](docs/img/logo/fx-48.png) |
|:---:|:---:|
| [Chrome](TODO-add-link-to-google-store) | ![Firefox](TODO-add-link-to-firefox-store) |

> If your company blocks Browser Extensions, or you have a tight security blocking pop-up windows from extensions 
> you can use the [our bookmarklets](https://www.bookmarks.dev/bookmarklets) which offer the same functionality 

## How to use
Select code snippet && (right click || click on extension icon) to save it to [Bookmarks.dev](https://www.bookmarks.dev).

A popup window is launched where you can add additional metadata to the code snippet record.

![Chrome extension screenshot](docs/img/gif/gif-save-snippet-via-chrome-extension-800.gif)

> You need to have an account to save code to your code snippets

> For youtube videos and stackoverflow questions the **tags** auto-completed

## Testing locally
Check out the git repository - `git clone https://github.com/BookmarksDev/code-snippets-browser-extension`

### Chrome
Go to [chrome://extensions/](chrome://extensions/), click **Load unpacked** and select the `code-snippets-browser-extension` folder
where you have checked it out:

![Install locally on chrome](docs/img/install-locally-and-reload-extension.png)

> Click "Reload" on the extension when you do modifications 

### Firefox
Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox), click **Load Temporary Add-on...**
 and select the `manifest.json` file from the `save-code-to-bookmarks.dev-browser-extension` folder where you have checked it out:

![Install locally on Firefox](docs/img/install-locally-and-reload-extension.png)

> Click "Reload" on the extension when you do modifications 

### Test the extension against the [`localhost`](https://github.com/BookmarksDev/bookmarks.dev) version of Bookmarks.dev 
Change the following line in [launch-bookmarksdev-dialog.js](launch-bookmarksdev-dialog.js):
```
const url = 'https://www.bookmarks.dev/my-codelets/new?sourceUrl=' + encodeURIComponent(l) + '&code=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true'
```
to
```
const url = 'http://localhost:4200/my-codelets/new?sourceUrl=' + encodeURIComponent(l) + '&code=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true'
```

and Reload the extension 

## Publish browser extension to official stores

### Publish to Google Chrome Webstore

First of all package it as a zip file:
```shell
zip -r bookmarks.dev.chrome.extension.zip * -x *.idea* *.git* '*docs/*' "*README.md*"
```

Go to [Chrome Webstore Dashboard](https://chrome.google.com/webstore/developer/dashboard) where
you upload the .zip file. Wait for a couple of business days for an approval.

### Publish to [Firefox Webstore](https://extensionworkshop.com/documentation/publish/)

