import { AxiosError } from "axios";
import api from "./api";

export async function listarCategorias() {
  try {
    const response = await api.get("/categoria");
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
    const response = await api.post("/categorias", categoria);
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
    const response = await api.delete(`/categorias/${id}`);
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
    const response = await api.put("/categorias", categoria);
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
    const response = await api.get(`/categorias/nome/${nome}`);
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
    const response = await api.get(`/categorias/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}
