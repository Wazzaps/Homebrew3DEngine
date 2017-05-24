onload = function () {
    engine = new Engine(document.getElementById("viewport"));
    render();
}

function render () {
    var time = new Date().getTime() % 5000;
    time /= 25;
    time -= 100;
    time = Math.abs(time);
    time += 100;
    engine.trigs = [
        [
            [200, 100, time + 50],
            [175, 200, time],
            [225, 200, time]
        ],[
            [200, 350, time + 50],
            [175, 250, time],
            [225, 250, time]
        ],[
            [175, 200, time],
            [175, 250, time],
            [75, 225, time + 50]
        ],[
            [225, 200, time],
            [225, 250, time],
            [325, 225, time + 50]
        ],[
            [175, 250, time],
            [175, 200, time],
            [225, 200, time]
        ],[
            [175, 250, time],
            [225, 250, time],
            [225, 200, time]
        ],[
            [200, 350, time + 50],
            [225, 250, time],
            [325, 225, time + 50]
        ],[
            [200, 350, time + 50],
            [175, 250, time],
            [75, 225, time + 50]
        ],
    ];
    engine.callback();
    requestAnimationFrame(render)
}