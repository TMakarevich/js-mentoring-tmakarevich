/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

class Page {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    open(url) {
        return this.baseUrl + url;
    }

    get footer() {
        return new Footer('footer');
    }

    get header() {
        return new Header('header');
    }

    get body() {
        return new Body('body');
    }
}

class Component {
    constructor(name) {
        this.name = name;
    }

    reviewComponent() {
        return `This is ${this.name} component`;
    }
}

class Footer extends Component {
    constructor(name) {
        super(name);
    }
}

class Header extends Component {

    constructor(name) {
        super(name);
    }
}

class Body extends Component {

    constructor(name) {
        super(name);
    }
}

class CatalogPage extends Page {

    constructor(baseUrl, path) {
        super(baseUrl);
        this.path = path;
    }

    open() {
        return 'I opened ' + super.open('/catalog');
    }

    get searchField() {
        return 'searchField';
    }

    get filterField() {
        return 'filterField';
    }

    get searchButton() {
        return 'search';
    }

    fillProduct(product) {
        return `I search ${product} in ${this.searchField}`;
    }

    applyFilter(filter) {
        return `I apply ${filter} in ${this.filterField}`;
    }

    clickSearch() {
        return `I've just run ${this.searchButton}`;
    }
}

const search = new CatalogPage('http://oz.by', '/catalog');
console.log(search);
console.log(search.open());
console.log(search.header.reviewComponent());
console.log(search.footer.reviewComponent());
console.log(search.body.reviewComponent());
console.log(search.fillProduct('book'));
console.log(search.applyFilter('children'));
console.log(search.clickSearch());