import { Application, LoaderResource } from "pixi.js"
import {Dict} from "@pixi/utils"

export type MainArgs = {
    app: Application,
    assets: Dict<LoaderResource>
}