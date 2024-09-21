/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Componentes/Adaptadores/CadastroProduto` | `/Componentes/Adaptadores/ItemProduto` | `/Componentes/Adaptadores/ListaProdutos` | `/Models/Produto` | `/Styles/Default` | `/Telas/cadastro` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
