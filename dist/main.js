"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map