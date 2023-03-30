const isEven = (tab) => {
    return tab.filter((e) => {
        return e % 2 !== 0;
    });
}


module.exports = {
    isEven: isEven
}
