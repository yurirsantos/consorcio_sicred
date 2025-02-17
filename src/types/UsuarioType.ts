import { CaminhoType, ObjetoSelectType } from "./General";

export type UsuarioType = {
  uscodigo?: string;
  usnome: string;
  uscpf: string;
  usemail: string;
  ussenha?: string;
  uscontato: string;
  confirmacaoSenha?: string;
  ustermosuso?: boolean;
  ustipo?: string;
  usfoto?: string;
  usstatus?: string;
  usdatanascimento: string;
  ussetor: any;
  edcep: string;
  edrua: string;
  edcidade: string;
  edbairro: string;
  eduf: string;
  edcomplemento: string;
  ednumero: any;
  usperfilacesso: string;
  gerarSenha: boolean;
  colaborador: boolean;
  lojas: Array<any>;
  usutitular: string,
  usunumeroconta: string,
  usunumeroagencia: string,
  usubanco: string,
  usutipoconta: string,
  usupix: string,
  usudigito: string,
};

export type ReturnUsuarioLoginType = {
  uscodigo: string;
  usnome: string;
  uscontato: string;
  usemail: string;
  uscpf: string;
  usdatanascimento: string;
};

export type UsuarioLoginType = {
  access_token: string;
  user: ReturnUsuarioLoginType;
  status: boolean;
  message: string;
  acessos: CaminhoType;
};
