if (process.platform !== "win32") {
    return;
}

require("child_process").spawnSync("node-hyp rebuild");