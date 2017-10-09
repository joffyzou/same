import { Component } from '@angular/core';

export class Menu {
	id: number;
	name: string;
	href: string;
}

const MENUS: Menu[] = [
	{ id: 1, name: '控制面板', href: 'dashboard' },
	{ id: 2, name: '预约管理', href: 'appoint' },
	{ id: 3, name: '订单管理', href: 'orders' },
	{ id: 4, name: '促销管理', href: 'sales' },
	{ id: 5, name: '技师管理', href: 'technician' },
	{ id: 6, name: '商品管理', href: 'commodity' }
]

@Component({
	selector: 'aside',
	templateUrl: './aside.component.html'
})

export class AsideComponent {
	menus = MENUS;
}