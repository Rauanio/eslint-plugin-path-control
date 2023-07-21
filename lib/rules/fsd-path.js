"use strict";

const path = require('path')

module.exports = {
  // eslint-disable-next-line eslint-plugin/prefer-message-ids
  meta: {
    // eslint-disable-next-line eslint-plugin/require-meta-type
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "This is rule for checking paths according to the FSD architecture",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importTo = node.source.value // src/entiites/Articles

        const fromFilename = context.getFilename() // C:/Users/Desktop/js/src/entiites/Articles

        if(shouldBeRalative(fromFilename,importTo)) {
          context.report(node, 'Within a single slice, all paths must be relative.')
        }
      }
    };
  },
};

function isPathRelative(path) {
  return path === '.' || path === './' || path === '../'
}

const layers = {
  'entities': 'entities',
  'features': 'features',
  'pages': 'pages',
  'widgets': 'widgets',
  'shared': 'shared',
}

function shouldBeRalative(from, to) {
  if(isPathRelative(to)) {
    return false
  }

  const toArray = to?.split('/')
  const toLayer = toArray?.[0]  // entities
  const toSlice = toArray?.[1]  // Articles

  if(!toLayer || !toSlice || !layers[toLayer] ) {
    return false
  }

  const normalaziedPath = path.toNamespacedPath(from)
  const projectFrom = normalaziedPath?.split('src')[1]
  const fromArray = projectFrom?.split('\\')

  const fromLayer = fromArray?.[1] 
  const fromSlice = fromArray?.[2] 

  
  if(!fromLayer || !fromSlice || !layers[fromLayer] ) {
    return false
  }

  return toLayer === fromLayer && fromSlice === toSlice
}

// console.log(shouldBeRalative('C:\\Users\\Desktop\\js\\src\\entities\\Articles', 'entities/Articles/asfasffa'));
// console.log(shouldBeRalative('C:\\Users\\Desktop\\js\\src\\entities\\Articles', 'entities/asf/asfasffa'));