module.exports = {
    frontController: (req, res, command) => {
        command.execute(req, res)
    }
}
