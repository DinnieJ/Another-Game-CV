import * as PIXI from 'pixi.js';
import { Application, Loader } from 'pixi.js';
import { resource } from './manifest';
import main from './main'


const execGame = async function() {
    const gameDOM: HTMLElement = document.getElementById("main-game");
    const cfg: PIXI.IApplicationOptions = {
        width: gameDOM.offsetWidth,
        height: gameDOM.offsetHeight,
        autoStart: false,
        backgroundColor: 0x123123
    }
    const game: Application = new Application(cfg);
    const loader: Loader = Loader.shared;
    let message: HTMLElement = document.getElementById("message");
    loader.onProgress.add((loader, res) => {
        console.log(`Loaded: ${res.name}, ${res.data}`)
        message.innerHTML = `Loaded: ${res.name}, ${res.data}`;
    })

    loader.onError.add((error: Error) => {
        console.log(error.message)
    })

    for(const [key, value] of Object.entries(resource)) {
        loader.add(key, require(`${value}`));
    }

    loader.load((loader, resources) => {
        main({
            app: game,
            assets: resources
        })
        gameDOM.appendChild(game.view);
        message.remove();
        game.start()
    });
}

export default execGame;