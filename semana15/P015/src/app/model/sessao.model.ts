export interface ISessao {
  id?: string;
  idUser: string;
  data: string;
  descricao: string;
  atividades: string[];
  porcos: IPorco[];
}

export interface IPorco {
  idPig: string;
  atividadesCompletas: string[];
}
