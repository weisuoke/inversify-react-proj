import {join} from "path";
import {extend} from "lodash";
// import {extend} from "lodash-es";

let config = {
    "viewDir": path.join(__dirname, "..", "views"),
    "staticDir": path.join(__dirname, "..", "assets")
}
if (process.env.NODE_ENV == "development") {
    const localConfig = {
        baseURL: "http://localhost/basic/web/index.php?r=",
        cacheMode: false,
        port: 3000
    }
    config = extend(config, localConfig);
}
if (process.env.NODE_ENV == "production") {
    const prodConfig = {
        cacheMode: "memory",
        port: 8081
    }
    config = extend(config, prodConfig);
}
export default config;
