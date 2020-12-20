import {fetchFromEndpoint} from "./base";

export function getPromos() {
    return fetchFromEndpoint('promos');
}