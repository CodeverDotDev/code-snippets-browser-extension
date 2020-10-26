{
  const l = location.href
  if (document.getSelection() && document.getSelection().toString() !== '') {
    d = document.getSelection()
    const t = document.title
    let w, h
    if (innerWidth > 1400) {
      w = 930
    } else {
      w = (innerWidth * 65) / 100
    }

    if (innerHeight > 1400) {
      h = 1150
    } else {
      h = (innerHeight * 90) / 100
    }
    const features = `toolbar=no,width=${w},height=${h},top=${innerHeight - h}, left=${innerWidth - w}`

    const url = 'https://www.bookmarks.dev/my-snippets/new?sourceUrl=' + encodeURIComponent(l) + '&code=' + encodeURIComponent(d) + '&title=' + encodeURIComponent(t) + '&popup=true'
    open(url, 'Bookmarks.dev', features)
  } else {
    alert('Please select a code snippet before saving to Bookmarks.dev')
  }
}
