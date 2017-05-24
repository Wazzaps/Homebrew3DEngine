var settings = {
    fov: 100,
    cameraWidth: 500,
    cameraHeight: 500
}

function Engine (canvas) {
    this.trigs = [];
    this.ctx = canvas.getContext("2d");
    
    var thus = this;
    this.callback = function () {
        thus.ctx.globalCompositeOperation = "source-over";
        thus.ctx.fillStyle = "white";
        thus.ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var trig in thus.trigs) {
            // 3d to 2d
            var trig2d = [_3dTo2d(thus.trigs[trig][0]), _3dTo2d(thus.trigs[trig][1]), _3dTo2d(thus.trigs[trig][2])];
            // draw trig
            var brightness = parseInt(200.0 - (trig / thus.trigs.length) * 100).toString(16);
            thus.ctx.fillStyle = "#"+brightness+brightness+brightness;
            thus.ctx.beginPath();
            thus.ctx.lineTo(trig2d[0][0], trig2d[0][1]);
            thus.ctx.lineTo(trig2d[1][0], trig2d[1][1]);
            thus.ctx.lineTo(trig2d[2][0], trig2d[2][1]);
            thus.ctx.closePath();
            thus.ctx.fill();
            // draw info
            //thus.ctx.fillStyle = "white";
            thus.ctx.font = "12px sans-serif";
            //thus.ctx.globalCompositeOperation = "xor";
            thus.ctx.fillText(parseInt(trig2d[0][0]) + ", " + parseInt(trig2d[0][1]), trig2d[0][0], trig2d[0][1]);
            thus.ctx.fillText(parseInt(trig2d[1][0]) + ", " + parseInt(trig2d[1][1]), trig2d[1][0], trig2d[1][1]);
            thus.ctx.fillText(parseInt(trig2d[2][0]) + ", " + parseInt(trig2d[2][1]), trig2d[2][0], trig2d[2][1]);
        }
    }
    
    return this;
}

function _3dTo2d (point) {
    return [((point[0] - (settings.cameraWidth/2)) * settings.fov)/point[2] + (settings.cameraWidth/2),
           ((point[1] - (settings.cameraHeight/2)) * settings.fov)/point[2] + (settings.cameraHeight/2)];
}

