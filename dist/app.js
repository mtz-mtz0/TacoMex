"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const direccion_1 = __importDefault(require("./routes/direccion"));
const repartidor_1 = __importDefault(require("./routes/repartidor"));
const cliente_1 = __importDefault(require("./routes/cliente"));
const producto_1 = __importDefault(require("./routes/producto"));
const menu_1 = __importDefault(require("./routes/menu"));
const pedido_1 = __importDefault(require("./routes/pedido"));
const cors_1 = __importDefault(require("cors"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const express_session_1 = __importDefault(require("express-session"));
class Application {
    constructor() {
        this.app = (0, express_1.default)();
        this.settings();
        //this.dbConnection();
        this.middlewares();
        //definir rutas
        this.routes();
        this.global();
        //   dotenv.config();
        require('dotenv').config({ path: './.env' });
    }
    settings() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.set("view engine", "ejs");
        this.app.set('views', path_1.default.join(__dirname, './views'));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    //async dbConnection(){
    //try {
    //await sequelize .authenticate();
    //console.log('Database online');
    //} catch (error) {
    //   throw new Error( 'error' );
    //}
    //}
    middlewares() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        //cors
        this.app.use((0, cors_1.default)());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
        this.app.use((0, express_session_1.default)({
            secret: 'secretkey',
            resave: false,
            saveUninitialized: false,
            cookie: { sameSite: 'strict' }
        }));
    }
    routes() {
        this.app.use("/", index_1.default);
        this.app.use('/api/usuario', usuarios_1.default);
        this.app.use("/api/direccion", direccion_1.default);
        this.app.use("/api/cliente", cliente_1.default);
        this.app.use("/api/repartidor", repartidor_1.default);
        this.app.use("/api/producto", producto_1.default);
        this.app.use("/api/menu", menu_1.default);
        this.app.use("/api/pedido", pedido_1.default);
    }
    global() {
        this.app.use((0, connect_flash_1.default)());
        //global variable
        this.app.use((req, res, next) => {
            this.app.locals.logged = req.flash('user');
            this.app.locals.idlogged = req.flash('id');
            next();
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.default = Application;
//# sourceMappingURL=app.js.map