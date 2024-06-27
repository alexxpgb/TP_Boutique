exports.PostLogin = async (req, res, server) => {
    const { email, password } = req.body;
    const user = await server.api.functions.users.LoginUser({ email, password }, server);
    if (!user) {
        return server.renderTemplate(res, req, 'login', { message: {
            type: 'error',
            text: "Email ou mot de passe incorrect"
        } });
    }
    req.session.user = user;
    return res.redirect('/');
}