/**
 * Created by Samuel Kaessner on 2/24/2018.
 */

var app = new PIXI.Application({backgroundColor: 0x1099bb});

var planetSize = 5000;

document.body.appendChild(app.view);


var UI = new PIXI.Container();
var world = new PIXI.Container();

resize();

/**
 * Build the basic setup.
 */
const planet = new PIXI.Graphics();
planet.beginFill(0xFFFFFF);
planet.drawCircle(0, 0, 100);
planet.endFill();
planet.x = app.renderer.width / 2;
planet.y = app.renderer.height / 2;

app.stage.addChild(planet);

const rocket = new PIXI.Graphics();
rocket.beginFill(0xEFCA0D);
rocket.drawRect(0, 100, 10, 100);
rocket.endFill();
rocket.x = app.renderer.width / 2;
rocket.y = app.renderer.height / 2;
app.stage.addChild(rocket);

let message = new PIXI.Text("Space Exploration Game Alpha 0.0.1");
app.stage.addChild(message);




let arrowLeft = keyboard(37),
    arrowRight = keyboard(39);

arrowLeft.press = () => {
    rocket.rotation += 0.1;
};

arrowRight.press = () => {
    rocket.rotation -= 0.1;
};


runTimeStep();

function runTimeStep() {
    requestAnimationFrame(runTimeStep);

}

/**
 * Resize the pixi renderer to fit the screen.
 */
function resize() {
    w = $(window).width();
    h = $(window).height();

    app.renderer.resize(w, h);
}

/**
 * Keyboard event handling utility.
 *
 * @param keyCode
 * @returns {{}}
 */
function keyboard(keyCode) {
    let key = {};

    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    key.downHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    key.upHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isUp && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    window.addEventListener("keydown", key.downHandler.bind(key), false);
    window.addEventListener("keyup", key.upHandler.bind(key), false);
    return key;
}



//Physics section



