export function removePDFBlinkingQueryParam(document) {
  [...document.querySelectorAll('a[href*="webassets.lovoo.com/privacy_en.pdf"]')].forEach(linkToPDF => {
    const [href] = linkToPDF.href.split('?');

    linkToPDF.href = href;
  });
}
