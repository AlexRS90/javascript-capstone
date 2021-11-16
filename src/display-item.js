import retrieveItem from "./retrieve-item";

const displayItem = async (item) => {
    const displayItem = await retrieveItem(item);
    console.log(displayItem);
}

export default displayItem;