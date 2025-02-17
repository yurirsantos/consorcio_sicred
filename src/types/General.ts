import { ModulosType } from "./ModulosType";

export type TypePasswordType = "text" | "password";

export type TipoUsuarioType = {
  tuscodigo: string;
  tustipo: string;
  selecionado: boolean;
};

export type ObjetoSelectType = {
  label: any;
  value: any;
};

export type ConsultaQuantidadeProtocolosType = {
  usuario: string;
  obras: Array<string>;
};

export type LoadingType = {
  loading: boolean;
  children: any;
};

export type SidebarType = {
  children: any;
  modulo: string;
  iconeModulo: any;
  tela?: string;
  iconeTela?: any;
  botoes?: any;
  buttonVoltar?: boolean;
  linkButtonVoltar?: string;
  onClickButtonVoltar?: any;
};

export type TableType = {
  values: any;
  coluns: any;
  globalFilterFields: Array<string>;
  placeholderGlobal: string;
  filters?: any;
  filtersInputs?: any;
  filterFields?: any;
};

export type ColumType = {
  header: string;
  body?: any;
  field?: string;
  width?: number;
  sortable: boolean;
};

export type LojaReturnType = {
  locodigo: string;
  lonome: string;
};

export type ObjetoWhatsAppMessageType = {
  numero: string;
  message: string;
};

export type CaminhoType = {
  pacodigo: string;
  pacaminho: string;
  caminhoRelation: CaminhoRelationType;
};

export type CaminhoRelationType = {
  cmcodigo: string;
  cmcaminho: string;
  cmaparecermenu: string;
  cmicone: any;
  cmmodulo: string;
  cmnome: string;
  cmordem: string;
  moduloRelation: ModuloRelationType;
};

export type ModuloRelationType = {
  mdcodigo: string;
  mdmodulo: string;
};

export type AcessosType = {
  modulo: string;
  caminhos: Array<CaminhoRelationType>
};