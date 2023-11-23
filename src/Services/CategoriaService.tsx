import { AxiosError } from "axios";
import http from "./http";

export async function listarCategorias() {
  try {
    const response = await http.get("/categoria");
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
    const response = await http.post("/categorias", categoria);
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
    const response = await http.delete(`/categorias/${id}`);
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
    const response = await http.put("/categorias", categoria);
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
    const response = await http.get(`/categorias/nome/${nome}`);
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
    const response = await http.get(`/categorias/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      return error;
    }
    return null;
  }
}
