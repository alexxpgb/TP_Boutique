exports.GetLogin = async (req, res, server) => {
    server.renderTemplate(res, req, 'login');   
}