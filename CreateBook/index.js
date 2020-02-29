module.exports = async function (context, req) {
    context.log('CreateBook Function Triggered');

    // Title is required
    if (req.body && req.body.title)
    {
        const itemBody = {
            "author": req.body.author,
            "title": req.body.title,
            "date_published": req.body.date_published
        }
        context.bindings.outputDocument = JSON.stringify(itemBody);
        context.res = {
            status: 200,
            body: "Item added successfully"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Parameter missing: Title of the book"
        };
    }    
};