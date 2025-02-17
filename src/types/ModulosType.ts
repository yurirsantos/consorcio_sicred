export type ModulosType = {
  mdcodigo: string;
  mdmodulo: string;
  mdicone: any;
  mdcaminho: string;
};

export type ModuloVincularAcessoType = {
  modulo: string;
  perfil: string;
};

export type ModulosVinculadosType = {
  macodigo: string;
  mamodulo: string;
  moduloRelation: ModulosType;
};
