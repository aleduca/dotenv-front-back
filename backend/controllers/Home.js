exports.index = function (request, response) {
    response.send(process.env.API_KEY);
};
