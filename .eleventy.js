const { DateTime } = require('luxon')
const navigationPlugin = require('@11ty/eleventy-navigation')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const markdownit = require("markdown-it")
const anchor = require("markdown-it-anchor")
const tocPlugin = require("eleventy-plugin-toc")
const sup = require('markdown-it-sup')
const mark = require('markdown-it-mark')
const easyTables = require('markdown-it-easy-tables')
const { execSync } = require('child_process')
const mathjaxPlugin = require("eleventy-plugin-mathjax")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const taskLists = require('markdown-it-task-lists')
const footnote = require('markdown-it-footnote')
const sub = require('markdown-it-sub')
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')
const seriesData = require("./_data/series.js")

module.exports = (config) => {
  config.addPlugin(navigationPlugin)
  config.addPlugin(syntaxHighlight)
  config.addPlugin(mathjaxPlugin)
  config.addPlugin(pluginRss)
  config.addPlugin(lazyImagesPlugin)

  // Set up the TOC
  config.setLibrary("md", markdownit().use(easyTables)
                                      .use(anchor)
                                      .use(sup)
                                      .use(mark)
                                      .use(footnote)
                                      .use(sub)
                                      .use(taskLists))
  config.addPlugin(tocPlugin, { tags: ["h2", "h3"] })
  markdownit().render('==marked==')
  markdownit().render('29^th^')

  config.addPassthroughCopy('css')
  config.addPassthroughCopy('static')
  
  config.setDataDeepMerge(true);

  config.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd')
  })

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL, yyyy")
  })

  config.addFilter("fullSeriesName", seriesName => {
    return seriesData[seriesName].longName
  })

  config.addFilter("filterBySerie", (collection, seriesName) => {
    return collection.filter(el => {
      return el.data.seriesName != seriesName
    })
  })

  config.addCollection("tagList", collection => {
    const tagsObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => {
          if(typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1
          } else {
            tagsObject[tag] += 1
          }
        })
    })

    const tagList = []
    Object.keys(tagsObject).forEach(tag => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
    })

    return tagList.sort((a, b) => b.tagCount - a.tagCount)
  })

  config.addCollection("seriesList", collection => {
    const seriesObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.seriesName) return;
          if(typeof seriesObject[item.data.seriesName] === 'undefined') {
            seriesObject[item.data.seriesName] = 1
          } else {
            seriesObject[item.data.seriesName] += 1
          }
    })

    const seriesExpanded = {}
    Object.keys(seriesObject).forEach(series => {
      seriesExpanded[series] = { name: series, postCount: seriesObject[series], longName: seriesData[series].longName}
    })

    return seriesExpanded
  })

  config.on('eleventy.after', () => {
    execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
  })

  config.addPairedAsyncShortcode(
    "bibtex",
    require("eleventy-plugin-bibtex")
  )
}