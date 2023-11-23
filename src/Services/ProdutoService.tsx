import { AxiosError } from "axios";
import api from "./api";

export async function listarProdutos() {
  try {
    const response = await api.get("/produtos");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}

export async function criarCategoria(categoria: any) {
  try {
    const response = await api.post("/produtos", categoria);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}

export async function excluirCategoria(id: number) {
  try {
    const response = await api.delete(`/produtos/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}

export async function editarCategoria(categoria: any) {
  try {
    const response = await api.put("/produtos", categoria);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}

export async function buscarCategoriaPorNome(nome: string) {
  try {
    const response = await api.get(`/produtos/nome/${nome}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}

export async function buscarCategoriaPorId(id: string) {
  try {
    const response = await api.get(`/produtos/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}
