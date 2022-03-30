

const secured = (req, res, next) => {
    res.json({message: "This resource access is open! "});
};


module.exports = {secured};
