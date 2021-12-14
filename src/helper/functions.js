const shorten = (title) => {
    const splitedItem = title.split(" ");
    const newItem = `${splitedItem[0]} ${splitedItem[1]}` ; 
    return newItem ;

}

export { shorten } ;