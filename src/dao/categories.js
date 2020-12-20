import {fetchFromEndpoint} from "./base";

export function getCategories() {
    return fetchFromEndpoint('categories');
}