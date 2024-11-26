export interface Produto {
  produtoId?: string;
  nome: string;
  validade: Date;
  dataFabricacao: Date;
  lote: string;
  ingredientes: string;
  descricao: string;
  marca: string;
  peso: string;
  preco: string;
  unidadeMedida: string;
  paisOrigem: string;
  tags: string[];
  categorias: string[];
}
