import {postToEndpoint} from "./base";

export function postOrder(data) {
    return postToEndpoint('orders', data);
}