import Entity from "~/dto/Entity.js";

/**
 *
 * @param url {string}
 * @param params {RequestInit}
 * @param serverSide {boolean}
 * @return {Promise<Entity>}
 */
export default async function (url, params = null, serverSide = true) {
    if (!params) params = {method: "GET"};
    url = "https://rusmasterbck.maxsharun.ru/" + url;
    if (serverSide) {
        const data = await useFetch(url, params);
        return Entity.createFromObj(JSON.parse(data.data.value));
    }

    const response = await fetch(url, params);
    const data = response.json();
    return Entity.createFromObj(data);
}