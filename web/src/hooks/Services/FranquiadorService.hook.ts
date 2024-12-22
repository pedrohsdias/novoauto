import {useAxios} from "@/hooks/useAxios.hook";
import {useLoading} from "@/contexts/LoadingContext";
import {UseCrudService} from "@/Types/hooks/crud.interface";
import {IFranquiador} from "@/Types/models/franquia.interface";

const useFranquiadores = ():UseCrudService<IFranquiador> => {
  const api = useAxios();
  const urlPath = '/franquiadores';
  const {addMessage,removeMessage} = useLoading()

  const listar = async (page: number = 1, rowsPerPage: number = 20) => {
    try {
      addMessage("Carregando Franquiadores")
      const response = await api.get(urlPath, {
        params: {
          rowsPerPage,
          page,
        },
      });
      removeMessage("Carregando Franquiadores")
      return response.data;
    } catch (error) {
      removeMessage("Carregando Franquiadores")
      throw error;
    }
  };

  const detalhar = async (id: number) => {
    try {
      const response = await api.get(`${urlPath}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados", error);
      throw error;
    }
  };

  const criar = async (params) => {
    try {
      const response = await api.post(`${urlPath}/`,params);
      return response.data;
    } catch (error) {
      console.error("Erro ao Criar os dados", error);
      throw error;
    }
  };

  const editar = async (id:number, params) => {
    try {
      const response = await api.put(`${urlPath}/${id}`,params);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar os dados", error);
      throw error;
    }
  };

  return { listar, detalhar, criar, editar };
};

export default useFranquiadores;
