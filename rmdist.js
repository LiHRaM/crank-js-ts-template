var fs = require("fs");

function rmDir(path) {
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(function (file, index) {
            const filePath = `${path}/${file}`;

            if (fs.lstatSync(filePath).isDirectory()) {
                rmDir(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });

        console.log(`Removing "${path}"...`);
        fs.rmdirSync(path);
    }
}

rmDir("./dist");