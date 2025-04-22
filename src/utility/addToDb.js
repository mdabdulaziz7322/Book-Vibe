const getStoredBook = () => {
    const storedBook = localStorage.getItem("readList");

    if(storedBook){
        const bookData = JSON.parse(storedBook);
        return bookData;
    }
    else{
        return [];
    }

}

const addToStoredDb = (id) => {
const storedBookData = getStoredBook();
if(storedBookData.includes(id)){
alert("This item already exists")
}
else{
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data)

}
}

export {addToStoredDb};