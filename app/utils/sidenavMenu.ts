export interface SidenavMenuItem {
  title?: string
  label?: string
  icon?: string
  to?: string
  children?: SidenavMenuItem[]
}

export const sidenavMenu: SidenavMenuItem[] = [
  { title: "Akunting" },
  { label: "Lis Akun", icon: 'iconify lucide--chart-bar', to: '#' },
  { label: "Jurnal", icon: 'iconify lucide--file-text', to: '#' },

  { title: "Manajemen" },
  { label: "Produk", icon: 'iconify lucide--package', to: '#' },
  { label: "Kategori", icon: 'iconify lucide--tags', to: '#' },
  { label: "Customer", icon: 'iconify lucide--user', to: '#' },
  { label: "Vendor", icon: 'iconify lucide--users', to: '#' },

  { title: "Transaksi" },
  { label: "Invoice", icon: 'iconify lucide--scroll-text',
    children: [
      { label: "List Invoice", to: '#' },
      { label: "Tambah Invoice", to: '#' }
    ]
   },
  { label: "Expense", icon: 'iconify lucide--banknote-arrow-down',
    children: [
      { label: "List Expense", to: '#' },
      { label: "Tambah Expense", to: '#' }
    ]
   },

  { title: "Laporan"},
  { label: "Neraca", icon: 'iconify lucide--scale', to: '#' },
  { label: "Laba Rugi", icon: 'iconify lucide--file-chart-pie', to: '#' },
  { label: "Arus Kas", icon: 'iconify lucide--file-chart-column', to: '#' },
]
