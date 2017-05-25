const index = require("./index");

module.exports = {
    getRoutes: (express, dependencies) => {
        const router = express.Router();
        const { authProvider } = dependencies;

        router.get("/", ...index.middlewares, (req, res) => index.handler(req, res, dependencies));
        router.use(authProvider.requireToken);
        router.get("/protected", (req, res) => console.log("Hello from protected route"));

        return router;
    }
}
