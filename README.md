# Tailormade

Tailormade is a UI kit which specializes in
- Component Design (Menus, buttons, forms)
- One time use code (Cookie acceptors, age gates)
- Animation and Design (Attached Content)

## Getting Started

Currently, Tailormade is in Beta and not available on NPM. Please star the repository if you are interested in continuing, or download the source and make changes with a pull request.

To test, use ```tailormade.umd.min.js``` for the best developer experience.

### Dependencies

"ms": "^2.0.0"

### Dev Dependencies

"rollup": "^1.0.0",

"rollup-plugin-commonjs": "^9.2.0",

"rollup-plugin-node-resolve": "^4.0.0"

"rollup-plugin-terser": "^4.04"

### Installing

Beta v0.0.1 - Not available

## Building

Building:

```
npm run build
```

Development:

```
npm run dev
```

## Basic Usage

A basic Tailormade component can be loaded in via the DOM Content.

```
document.addEventListener("DOMContentLoaded", function(){
   const homePage = new tailormade.GeneratePage(
      {
         'menu': new tailormade.FullMenu("test")
         // More tailormade components
      }
   );
})
```

## Built With

* [NodeJS](https://nodejs.org/en/)

* [NPM](https://www.npmjs.com/)

## Contributing

Contributing information will be available at a later date.

## Versioning

We use NodeJS package.json and increment our build as necessary.
Major releases version up by x.0.0
Minor releases will version up by \[version\].x.x

## Authors

* **Duncan Pierce** - *All Work* - [Sigkar](https://github.com/sigkar)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* NPM
* NodeJS

* Bootstrapped with [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) and configuration modified by Sigkar
