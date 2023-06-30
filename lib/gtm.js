export const GTM_ID = "GTM-XXXXXX"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}