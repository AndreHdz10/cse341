const someonesName = (req, res, next) => {
    res.json('Leo Hernandez');
};

const anotherPersonName = (req, res, next) => {
    res.json('Stephanie Aragon');
};

module.exports = {
    someonesName, anotherPersonName
};