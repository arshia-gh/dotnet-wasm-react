import { dotnet } from './dist/dotnet/dotnet.js'

async function createRuntimeAndGetExports() {
    const { getAssemblyExports, getConfig } = await dotnet.create();
    const config = getConfig();
    return await getAssemblyExports(config.mainAssemblyName);
}

export const exported = await createRuntimeAndGetExports();


