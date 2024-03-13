import { dotnet } from './dist/dotnet/dotnet.js'

let exportsPromise = null;

async function createRuntimeAndGetExports() {
    const { getAssemblyExports, getConfig } = await dotnet.create();
    const config = getConfig();
    return await getAssemblyExports(config.mainAssemblyName);
}

const withExports = (cb) => {
    if (!exportsPromise) {
        exportsPromise = createRuntimeAndGetExports();
    }


    return async (...args) => {
        const exports = await exportsPromise;
        return cb(exports, ...args)
    }
}

export const findMultiplesOf = withExports(async (exports, x) => {
    return exports.Math.FindMultiplesOf(x)
});


