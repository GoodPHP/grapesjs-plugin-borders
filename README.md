# GrapesJS Borders Plugin

This plugin replaces the colors for badge,resize,toolbar,selected components,etc

## Summary

* Plugin
  * Name: `grapesjs-plugin-borders`



## Download

* `npm i grapesjs-plugin-borders` or `yarn add grapesjs-plugin-borders`



## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-plugin-borders.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  let editor = grapesjs.init({
    container : '#gjs',
    plugins: ['grapesjs-plugin-borders'],
    pluginsOpts: {
      'grapesjs-plugin-borders': {
        'main_color': '#000000', // For all
        // OR
        'selected': '#000000',
        'resizer': '#000000',
        'toolbar': '#000000',
        'badge': '#000000',
        'highlighter': '#000000'
      }
    }
  });
</script>
```



## Development

Clone the repository

```sh
$ git clone https://github.com/GoodPHP/grapesjs-plugin-borders.git
$ cd grapesjs-plugin-borders
```

Install dependencies

```sh
$ npm i
```

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```


## License

BSD 3-Clause
