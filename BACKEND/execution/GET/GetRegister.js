exports.GetRegister = async (req, res, server) => {
    server.renderTemplate(res, req, 'register');   
}