import api from "./api"

export async function buscarEspacialistaPorEstado(estado: string, especialidade: string) {
    try {
        const resultado = await api('/especialista/busca', {
            params: {
                estado,
                especialidade
            }
        })
        return resultado.data
    }
    catch (error) {
        console.log(error)
    }
}