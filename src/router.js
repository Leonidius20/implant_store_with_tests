export default class Router {

    constructor() {
        this.routes = [];
    }

    path(path, callback) {
        this.routes.push({path, callback});
    }

    goTo(path) {
        window.location.hash = path;
    }

    navigate() {
        this.deselectAllNavbarItems();

        const hash = window.location.hash.slice(1);
        const [path, id] = hash.split('/');
        const route = this.routes.find(route => route.path === path);
        if (route) {
            route.callback(id);
        } else {
           this.goTo('');
        }

        scroll(0, 0);

        // collapsing mobile navbar
        document.getElementById('navbarColor02').classList.remove('show');
    }

    apply() {
        window.onhashchange = () => {
            this.navigate();
        }
    }

    remove() {
        window.onhashchange = null;
    }

    changeHashQuietly(newHash) {
        this.remove();
        setTimeout(() => window.location.hash = newHash, 0);
        setTimeout(() => this.apply(), 500);
    }

    deselectAllNavbarItems() {
        const navbarItems = document.getElementsByClassName('nav-item');
        for (let i = 0; i < navbarItems.length; i++) {
            navbarItems.item(i).classList.remove('active');
        }
    }

}