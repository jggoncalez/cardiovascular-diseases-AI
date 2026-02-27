import { IWayConfig } from "./way-config";

export interface IPaginationConfig {
    pageNumber : Number,
    previousActive : boolean,
    nextActive : boolean,
    ways : IWayConfig
}
