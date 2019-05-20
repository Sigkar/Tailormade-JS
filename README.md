# Tailormade

Tailormade is a UI kit which specializes in
- Component Design (Menus, buttons, forms)
- One time use code (Cookie acceptors, age gates)
- Animation and Design (Attached Content)

## Getting Started

Currently, Tailormade is in Beta and not available on NPM. Please star the repository if you are interested in continuing, or download the source and make changes with a pull request.

To test in an environment, use ```tailormade.dev.js``` for the best developer experience.

### Dependencies

"ms": "^2.0.0"

### Dev Dependencies

"rollup": "^1.0.0",

"rollup-plugin-commonjs": "^9.2.0",

"rollup-plugin-node-resolve": "^4.0.0"

"rollup-plugin-terser": "^4.04"

"jest": "^24.8.0"

### Installing

Beta v0.0.1 - Not available

## Testing

To test tailormade, simply run the following in your CLI.

Please only write tests in Jest.

```
npm run test
```

## Building

### Local Development Environment

Local Building:
```
npm run local
```

Local Development:
```
npm run local dev
```

### In a production setting

Production Building:

```
npm run build
```

Production Development: (Not recommended)

```
npm run dev
```

## Basic Usage

A basic tailormade component is an object by nature. You can load it in to anything due to the magic of the UMD filetype. Node? Got it. Browser? Ok!

So, by nature, you can generate a new Tailor Menu via the following code:
```
new tailormade.GeneratePage({'menu':new tailormade.FullMenu()});
```

## Roadmap

- Predesigned Components
   - Mastheads
      - Informative Text
      - Images
      - Tasteful Designs
   - Posts
      - Status Posts
      - Blog Posts
      - Blog Previews
   - Modals
      - Forms
         - ServiceWorkers
      - Info-sheets
      - Brochures
   - More!
- Ability to run Tailormade as a Single Page Application
- Regex script that will automatically generate component content for editing.
- Script that will treeshake a library for the content needed on the backend
- ServiceWorker support for APIs, Caching, and other materials.
- A secret project (Lazarus)

## Built With

* [NodeJS](https://nodejs.org/en/)

* [NPM](https://www.npmjs.com/)

## Contributing

You can contribute to TailorMade by forking the repository to your own git, and making changes. Pull requests will only be accepted if:
- All unit tests pass
- Pull requests are being made to a development branch
- The Distribution folder \[./dist/*\] is not affected by your push.

Repository admins will compile and make final verdicts on the distribution folder on the master branch.

## Versioning

We use NodeJS package.json and increment our build as necessary.
Major releases version up by x.0.0
Minor releases will version up by \[version\].x.x



## Authors

* **Duncan Pierce** - *All Work* - [Sigkar](https://github.com/sigkar)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* NPM
* NodeJS

* Bootstrapped with [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) and configuration modified by Sigkar
