# My experimental homebrew 3D engine

## Usage
See `example.js` or this simplified example:
```html
<html>
    <head>
        <script src="engine.js"></script>
        <script src="example.js"></script>
    </head>
    <body>
        <canvas id="viewport" style="border: solid 1px;" width="500" height="500"></canvas>
    </body>
</html>

```

```javascript
onload = function () {
    engine = new Engine(document.getElementById("viewport"));
    render();
}

function render () {
    engine.trigs = [
        [
            [0, 0, 0],
            [0, 100, 0],
            [0, 100, 200]
        ],[
            [200, 100, 0],
            [200, 250, 0],
            [225, 290, 20]
        ]
    ];
    engine.callback();
    requestAnimationFrame(render)
}

```
