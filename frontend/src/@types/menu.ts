export type LinkMenu = {
    id: number,
    nome: string,
    parametros?: string,
    filhos?: LinkMenu[],
    possuifilhos: boolean,
    component?: string,
    rota: string,
    icone?: string,
    pai_id?: number,
    ordem?: number,
    desabilitado?: boolean
    papel?: number,
    permissao?: number,
    status_id?: number,
    created_at?: Date,
    updated_at?: Date,
}
// export class LinkMenu {
//     url: string;
//     nome: string;
//     urlpai?: string;
//     ativo?: boolean;
//     desabilitado?: string;
//     icone?: string;
//     filhos?: LinkMenu[];
  
//     sequencia?: number;
//     codemp?: number;
//     codfil?: number;
//     tipoportal?: string;
//     gruposacesso?: string;
//     ordem?: number;
//     grupomenu?: number;
  
//     onClick?(): void;
  
//     constructor(url?: string, nome?: string, urlpai?: string) {
//       this.url = url ? url : null;
//       this.nome = nome ? nome : null;
//       this.urlpai = urlpai ? urlpai : null;
//     }
  
//     validaFilhoAtivo?(linkPai: LinkMenu, linkFilhos: LinkMenu[], url: string) {
//       console.log(3);
//       const auxLink = new LinkMenu()
//       const indexAtivo = linkFilhos.findIndex(link => link.urlpai === linkPai.url && '/' + linkPai.url === url);
//       const indexlinkPai = linkFilhos.findIndex(link => link.urlpai === linkPai.url);
//       let retornoLinkAtivo = false;
//       if (indexAtivo !== -1) {
//         retornoLinkAtivo = true;
//       }
//       if ((indexAtivo === -1) && (indexlinkPai !== -1)) {
//         linkFilhos.forEach(link => {
//           if (link.urlpai === linkPai.url && url === '/' + link.url) {
  
//             retornoLinkAtivo = true;
//           }
//           if (!retornoLinkAtivo && link.urlpai === linkPai.url && link.filhos.length) {
//             retornoLinkAtivo = auxLink.validaFilhoAtivo(link, link.filhos, url);
//           }
//           if (retornoLinkAtivo) {
//             return retornoLinkAtivo;
//           }
  
//         });
//       }
//       return retornoLinkAtivo;
//     }
  
//     montaLinksFilho?(linkPai: LinkMenu, linkLista: LinkMenu[]) {
//       const auxLink = new LinkMenu()
//       const indexlinkPai = linkLista.findIndex(link => link.urlpai === linkPai.url);
//       const linkFilhosRetorno: LinkMenu[] = [];
//       if (indexlinkPai !== -1) {
//         linkLista.forEach(link => {
//           if (link.urlpai === linkPai.url) {
//             link.filhos = auxLink.montaLinksFilho(link, linkLista);
//             linkFilhosRetorno.push(link);
//           }
//         });
//       }
//       return linkFilhosRetorno;
  
//     }
  
//   }
  
//   trataMenu() {
//     console.log(1)
//     let linkMenuAux = new LinkMenu('#', 'x', 'x');
//     this.filtros = null;
//     this.filtros = [];
//     this.apiLinkMenuConsulta.retornaDadosLinkMenuUsuario(this.filtros).subscribe(linkMenuRetorno => {
//       this.linkMenuDinamicoCollection = linkMenuRetorno;
//       this.linkMenuDinamicoCollection.forEach((link, indice) => {
//         const arrayFilhos = linkMenuAux.montaLinksFilho(link, this.linkMenuDinamicoCollection);
//         this.linkMenuDinamicoCollection[indice].filhos = arrayFilhos.length ? arrayFilhos : [];
//       });
//       this.linkMenuDinamicoCollection = this.linkMenuDinamicoCollection.filter(item => {
//         return !item.urlpai
//       });
//       console.log(this.linkMenuDinamicoCollection);
//     }, erro => {
//       console.log(erro);
//     });
//   }  