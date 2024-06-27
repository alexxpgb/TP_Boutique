exports.PostRegister = async (req, res, server) => {
    const { firstname, lastname, email, password, address, city, postal, phone } = req.body;
    let IsExisting = await server.api.functions.users.UserExist(email, server);
    if(IsExisting) {
        return server.renderTemplate(res, req, 'register', { message: {
            type: 'error',
            text: "Un compte existe déjà avec cet email"
        } });
    }
    const created = await server.api.functions.users.CreateUser({ firstname, lastname, email, password, address, city, postal, phone }, server);
    if (!created) {
        return server.renderTemplate(res, req, 'register', { message: {
            type: 'error',
            text: "Impossible de créer le compte"
        } });
    }
    return server.renderTemplate(res, req, 'login', { message: {
        type: 'success',
        text: "Compte créé avec succès"
    } });
}