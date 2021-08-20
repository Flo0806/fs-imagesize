# react-markdown plugin to set images size.
### A simple to use plugin to set `images` width property.
Basically, `images` are displayed in their full size when you use [react-markdown](https://github.com/remarkjs/react-markdown). This can cause them to overlap their parent element or to be displayed too small.
With this plugin the `width` property can be set very easily.
## Install
```
npm install fs-imagesize
```
## Simple to use
```js
import React from "react";
import ReactMarkdown from "react-markdown";
import imageSize from "fs-imagesize";

function MyComponent(props) {
    return (
        <React.Fragment>
            <ReactMarkdown plugins={[[imageSize, {width: "230px"}]]}>![Image](https://anyImageUrl.png)</ReactMarkdown>
        </React.Fragment>)
}
```
The `width` property can be set to any pixel/percent size. If it not set the default value is **100%**.