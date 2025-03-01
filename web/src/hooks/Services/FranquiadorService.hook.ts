import {useAxios} from "@/hooks/useAxios.hook";
import {useLoading} from "@/contexts/LoadingContext";
import {UseCrudService} from "@/Types/hooks/crud.interface";
import {IFranquiador} from "@/Types/models/franquia.interface";
import {simpleWarning} from "@/services/swAlertService";

const useFranquiadores = ():UseCrudService<IFranquiador> => {
  const api = useAxios();
  const urlPath = '/franquiadores';
  const {addMessage,removeMessage} = useLoading()
  const loadAllMsg = "Carregando Franquiadores"

  const listar = async (
    page: number = 1,
    rowsPerPage: number = 20,
    orderBy:string | null = null,
    order:string = 'asc',
    filter:string | null = null
  ) => {
    try {
      addMessage(loadAllMsg)
      // noinspection JSAnnotator
      const response = await api.get(urlPath, {
        params: {
          rowsPerPage,
          page,
          orderBy,
          order,
          filter
        },
      });
      removeMessage(loadAllMsg)
      return response.data;
    } catch (error) {
      removeMessage(loadAllMsg)
      await simpleWarning('Falha ao listar Franquiadores')
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
