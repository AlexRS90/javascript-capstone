import popUp from './pop-up.js';
import retrieveItem from './retrieve-item.js';

const displayItem = async (id) => {
  const displayItem = await retrieveItem(id);
  const charData = displayItem.data.results[0];
  popUp(charData);
};

export default displayItem;
