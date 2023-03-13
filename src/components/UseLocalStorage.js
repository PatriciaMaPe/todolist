import React from 'react';

function UseLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    let parsedItems;
    
    try {
        const itemLocalStorage = localStorage.getItem(itemName);


        if (!itemLocalStorage) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
        } else {
            parsedItems = JSON.parse(itemLocalStorage);
        }
    } catch (err) {
        setError(err);
    }

    const [item, setItem] = React.useState(parsedItems);
    //setLoading(false);

    const saveItems = (updatedItems) => {
        localStorage.setItem(itemName, JSON.stringify(updatedItems));
        setItem(updatedItems);
    }

    return ({
        item,
        saveItems,
        loading,
        error
    })
}

export { UseLocalStorage };