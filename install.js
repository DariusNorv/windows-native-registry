if (process.platform !== "win32") {
    return;
}

require("child_process").execSync(`node-gyp rebuild`);