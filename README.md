# Lending Hand Website

Flat and responsive website for Lending Hand Inc, originally designed and coded by [Maxim Orlov](https://github.com/orlovmax) and updated by [Magnogen](https://github.com/Magnogen)

Based on the [Marketing Agency one page template](https://github.com/website-templates/marketing-agency_one-page-template)

## Contents
* [Folder structure](#folder-and-file-structure)
* [License](#license)

## Folder and file structure
```
./
├── index.html                                 * initial home page
├── search/                                    * sources and pages for searching
|   ├── index.html                             * initial search page
|   ├── products.html                          * the compilation of all our products
|   └── script.js                              * scripty scripty
|   
├── README.md
|
├── dev/                                       * site sources
│   ├── images/                                * image sources
|   │
│   ├── pug/                                   * templates
|   |   ├── blocks/                            * blocks library
|   │   |   └── block.pug
|   │   ├── helpers/                           * helper mixins
|   │   ├── vendor/                            * third-party code
|   │   ├── layouts/                           * page layouts
|   │   └── pages/                             * main pages templates
|   │
│   ├── js/                                    * compiled and source js
|   |   ├── vendor/                            * vendor scripts library
|   |   ├── lib/                               * site scripts library
|   │   ├── head.js                            * head scripts
|   │   └── body.js                            * vendor scripts
|   │
|   ├── sass/                                  * sass preprocessor styles
|   |   ├── blocks/                            * blocks library
|   │   |   └── block.sass
|   │   ├── helpers/                           * mixins and vars
|   │   ├── vendor/                            * third-party code
|   │   ├── custom.sass
|   │   ├── noscript.sass
|   │   └── screen.sass
|   │
│   ├── helpers/                               * helper files
|   |   ├── favicon.ico
|   |   └── .htaccess
|   │
│   └── fonts/                                 * font sources
│
└── build/                                     * built source
    |
    └── static/                                * static assets
        ├── css/                               * minified styles
        |
        ├── images/                            * minified images
        │
        ├── js/                                * minified assembled js
        |
        └── fonts/                             * @font-face-ready webfonts

```

## License
[Apache-2.0](https://github.com/Lending-Hand/lending-hand.github.io/blob/master/LICENSE.md)
