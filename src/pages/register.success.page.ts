import Page from "../pages/page";

class WebFormSuccess extends Page {
    
    private get header() {
        return $('//h1');
    }

    getHeader() {
        return this.header;
    }
}

export default new WebFormSuccess();