const get_index = require("./get_index");

module.exports = {
    getRoutes: (express, dependencies) => {
        const router = express.Router();
        const { authProvider } = dependencies;

        router.get("/", ...get_index.middlewares, (req, res) => get_index.handler(req, res, dependencies));
        router.use(authProvider.requireToken);
        router.get("/protected", (req, res) => console.log("Hello from protected route"));

        return router;
    }
}
