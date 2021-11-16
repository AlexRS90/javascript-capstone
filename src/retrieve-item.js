import apiCall from "./marvel-api-call";

const retrieveItem = async (item) => {
    const data = await apiCall();
    const result = data.filter(hero => hero.name === item.children[1].children[0].innerHTML);
    return result;
}

export default retrieveItem;