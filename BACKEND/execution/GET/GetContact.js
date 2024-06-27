exports.GetContact = async (req, res, server) => {
    server.renderTemplate(res, req, 'contact');   
}