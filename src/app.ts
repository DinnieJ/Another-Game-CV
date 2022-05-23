import { Application, IApplicationOptions } from '@pixi/app';
import { Loader } from '@pixi/loaders';
import { resource } from './manifest';
import main from './main'


const execGame = async function() {
    const gameDOM: HTMLElement = document.getElementById("main-game");
    const cfg: IApplicationOptions = {
        width: gameDOM.offsetWidth,
        height: gameDOM.offsetHeight,
        autoStart: false,
        backgroundColor: 0x123123
    }
    const game: Application = new Application(cfg);
    const loader: Loader = Loader.shared;
    let message: HTMLElement = document.getElementById("message");
    loader.onProgress.add((loader, res) => {
        console.log(`Loading: ${res.name}, ${res.data}`)
        message.innerHTML = `Loading: ${res.name}, ${res.data}`;
    })

    loader.onError.add((error: Error) => {
        console.log(error)
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