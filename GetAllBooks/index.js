module.exports = async function (context, req, inputDocument) {
    context.log('GetAllBooks Function Triggered');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: inputDocument
    };
};