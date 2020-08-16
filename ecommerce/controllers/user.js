const sayHi = (req, res) => {
    res.json({ message: 'hello there' });
};

module.exports = sayHi;