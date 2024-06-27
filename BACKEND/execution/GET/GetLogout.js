exports.GetLogout = async (req, res, server) => {
    req.session?.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });  
}