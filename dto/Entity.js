export default class Entity {

    /**
     * @type {Number}
     */
    id;
    /**
     * @type {String}
     */
    url;
    title = '';
    picture = '';
    /**
     *
     * @type {Entity[]}
     */
    children = [];
    /**
     *
     * @type {Entity[]}
     */
    subCategories = [];
    content = "";
    gallery = []
    name = "";
    post = "";
    order = "";
    description = "";
    video = "";

    get localUrl() {
        return this.url
            .replace("https://rusmasterbck.maxsharun.ru/", "")
            .replace("category", "");
    }

    /**
     *
     * @param obj
     * @return {Entity}
     */
    static createFromObj(obj) {
        const entity = new Entity(obj.id, obj.url);
        if (obj.title) entity.title = obj.title;
        if (obj.picture) entity.picture = obj.picture;
        if (obj.children) entity.children = obj.children.map(el => Entity.createFromObj(el));
        if (obj.content) entity.content = obj.content;
        if (obj.subCategories) entity.subCategories = obj.subCategories.map(el => Entity.createFromObj(el));
        if (obj.gallery) entity.gallery = obj.gallery.map(el => "https://rusmasterbck.maxsharun.ru" + el);
        if (obj.name) entity.name = obj.name;
        if (obj.post) entity.post = obj.post;
        if (obj.order) entity.order = obj.order;
        if (obj.description) entity.description = obj.description;
        if (obj.video) entity.video = obj.video;

        entity.sort();
        return entity;
    }

    constructor(id, url) {
        this.id = id;
        this.url = url;
    }

    toSwiper() {
        if (this.gallery.length === 0) {
            return [{
                id: 1,
                src: this.picture
            }];
        }
        return this.gallery.map((src, i) => {
            return {
                id: i,
                src
            }
        });
    }

    sort() {
        this.children.sort((a, b) => {
            return a.order.localeCompare(b.order);
        });
    }

}