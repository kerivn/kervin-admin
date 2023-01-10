import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./modules/*.ts', { eager: true })

function formatModules(modules: any, exclude?: string): any[] {
    const result: any[] = []
    Object.keys(modules).forEach((key) => {
        if (exclude && key.includes(exclude)) {
            return
        }
        const defaultModule = modules[key]
        if (!defaultModule) {
            return
        }
        const moduleList = Array.isArray(defaultModule)
            ? [...defaultModule]
            : [defaultModule]
        result.push(...moduleList)
    })
    return result
}

const mockModules = formatModules(modules)
/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
    createProdMockServer(mockModules)
}
