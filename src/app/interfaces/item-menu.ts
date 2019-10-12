export interface ItemMenu {
    texto: string;
    enlace: string;
    icono: string;
    tieneSubmenu: boolean;
    itemsSubmenu?: string[];
}
