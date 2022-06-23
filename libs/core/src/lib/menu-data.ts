import { MenuItemType, MenuItem } from '@ngx-starter-kit/navigator';

export const defaultMenu: MenuItem[] = [
  {
    name: 'Home',
    icon: 'home',
    link: '/home',
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    name: 'Admin',
    icon: 'security',
    link: '/admin',
  },
  // {
  //   name: 'Custom components',
  //   type: SidenavItemType.Separator,
  // },
  {
    name: 'Grid',
    icon: 'insert_chart',
    disabled: false,
    children: [
      {
        name: 'CRUD Table',
        icon: 'web_aaset',
        link: '/dashboard/grid/crud-table',
      },
      {
        name: 'Grid List',
        icon: 'grid_on',
        link: '/dashboard/grid/grid-list',
      },
    ],
  },
  {
    name: 'Experiments',
    icon: 'developer_board',
    disabled: false,
    children: [

      {
        name: 'Upload',
        icon: 'backup',
        link: '/dashboard/experiments/file-upload',
      },
      {
        name: 'Context Menu',
        icon: 'web_aaset',
        link: '/dashboard/experiments/context-menu',
      },
      {
        name: 'Virtual Scroll',
        icon: 'reorder',
        link: '/dashboard/experiments/virtual-scroll',
      },
      {
        name: 'Sticky Table',
        icon: 'view_list',
        link: '/dashboard/experiments/table',
      },

      {
        name: 'Layout',
        icon: 'apps',
        link: '/dashboard/experiments/layout',
      },
      {
        name: 'Dashing',
        icon: 'apps',
        link: '/dashboard/experiments/dashing',
      },
      {
        name: 'Viewport',
        icon: 'view_carousel',
        link: '/dashboard/experiments/viewport',
      },

    ],
  },
  {
    name: 'Micro-Interactions',
    icon: 'casino',
    disabled: false,
    children: [
      {
        name: 'Image Comp',
        icon: 'tonality',
        link: '/dashboard/experiments/image-comp',
      },
    ],
  },

];

export const adminMenu: MenuItem[] = [
  {
    name: 'Messaging',
    icon: 'business',
    disabled: false,
    children: [
      {
        name: 'Subscriptions',
        icon: 'web_aaset',
        link: '/admin/subscriptions',
      },
      {
        name: 'Notifications',
        icon: 'grid_on',
        link: '/admin/notifications',
      },
    ],
  },
  {
    name: 'Dashboard',
    type: MenuItemType.DropDown,
    icon: 'dashboard',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard',
      },
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard',
      },
      {
        name: 'Orders',
        link: '/dashboard/orders',
        icon: 'dashboard',
      },
    ],
  },
  {
    name: 'Custom components',
    type: MenuItemType.Separator,
  },
];

export const demoMenu: MenuItem[] = [
  {
    name: 'Dashboard',
    type: MenuItemType.DropDown,
    icon: 'dashboard',
    badge: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard',
      },
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard',
      },
      {
        name: 'Orders',
        link: '/dashboard/orders',
        icon: 'dashboard',
      },
    ],
  },
  {
    name: 'Custom components',
    type: MenuItemType.Separator,
  },
];
