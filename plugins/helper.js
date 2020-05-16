import crypto from 'crypto'
import marked from 'marked'

export function markdown(string, param) {
  return marked(resize(string, param))
}

export function resize(str, param) {
  return typeof str === 'undefined' ? '' : str.replace(/a.storyblok.com/g, 'img2.storyblok.com/' + param);
}

export function checkAndInitEditMode(app) {
  // Want to know more about this? https://github.com/storyblok/storyblok-nuxt
  app.$storybridge.on(['published', 'change'], (event) => {
    if (!event.slugChanged) {
      window.location.reload()
    }
  })
}