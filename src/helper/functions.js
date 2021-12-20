const shorten = (title) => {
    const splitedItem = title.split(" ");
    const newItem = `${splitedItem[0]} ${splitedItem[1]}` ; 
    return newItem ;

}

const isIncart = (state , id) => {
    const result = !!state.selectedItems.find (item => item.id === id);
    return result;
}

const productQuantity =(state , id) => {
    const index = state.selectedItems.findIndex (item => item.id === id);
    if (index === -1)
    {
        return false
    } else
    {
        return state.selectedItems[index].quantity;
    }
    

}

export { shorten , isIncart , productQuantity } ;