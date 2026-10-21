export interface SidenavMenuItem {
  title?: string
  label?: string
  icon?: string
  to?: string
  children?: SidenavMenuItem[]
}

export const sidenavMenu: SidenavMenuItem[] = [
  { title: "Overview" },
  { label: "Dashboards", icon: 'iconify lucide--monitor-dot',
    children: [
      { label: "Analytics", to: '/app/dashboard' },
      { label: "Ecommerce", to: '#' },
      { label: "Email", to: '#' },
      { label: "HR", to: '#' }
    ]
   },
  { label: "Landing Page", icon: 'iconify lucide--picture-in-picture-2',
    children: [
      { label: "One Page", to: '#' },
      { label: "Product", to: '#' }
    ]
   },
  { title: "Apps" },
  { label: "Chat", icon: 'iconify lucide--messages-square', to: '#' },
  { label: "Calendar", icon: 'iconify lucide--calendar-1', to: '#' },
  { label: "Email", icon: 'iconify lucide--mail', to: '#' },
  { label: "Notes", icon: 'iconify lucide--clipboard-list', to: '#' },
  { label: "Ecommerce", icon: 'iconify lucide--shopping-bag',
    children: [
      { label: "Products", to: '#' },
      { label: "Products Grid", to: '#' },
      { label: "Product Details", to: '#' },
      { label: "Shopping Cart", to: '#' },
      { label: "Checkout", to: '#' },
      { label: "Add Products", to: '#' },
      { label: "Orders", to: '#' },
      { label: "Order Details", to: '#' },
      { label: "Sellers", to: '#' }
    ]
   },
  { label: "HR Management", icon: 'iconify lucide--circuit-board',
    children: [
      { label: "Employee List", to: '#' },
      { label: "Holidays", to: '#' },
      { label: "Leave Manage",
        children: [
          { label: "By Employee", to: '#' },
          { label: "Add Leave(Employee)", to: '#' },
          { label: "By HR", to: '#' },
          { label: "Add Leave(HR)", to: '#' }
        ]
       },
      { label: "Attendance",
        children: [
          { label: "Attendance(HR)", to: '#' },
          { label: "Main Attendance", to: '#' }
        ]
       },
      { label: "Department", to: '#' },
      { label: "Sales",
        children: [
          { label: "Estimates", to: '#' },
          { label: "Payments", to: '#' },
          { label: "Expenses", to: '#' }
        ]
       },
      { label: "Payroll",
        children: [
          { label: "Employee Salary", to: '#' },
          { label: "Payslip", to: '#' },
          { label: "Create Payslip", to: '#' }
        ]
       }
    ]
   },
  { label: "Invoice", icon: 'iconify lucide--file-text',
    children: [
      { label: "Overview", to: '#' },
      { label: "List Invoice", to: '#' },
      { label: "Add Invoice", to: '#' }
    ]
   },
  { label: "Users", icon: 'iconify lucide--square-user-round',
    children: [
      { label: "List View", to: '#' },
      { label: "Grid View", to: '#' }
    ]
   },
  { title: "Extra" },
  { label: "Pages", icon: 'iconify lucide--codesandbox',
    children: [
      { label: "Account", to: '#' },
      { label: "Account Settings", to: '#' },
      { label: "Starter Page", to: '#' },
      { label: "Pricing", to: '#' },
      { label: "FAQ", to: '#' },
      { label: "Contact Us", to: '#' },
      { label: "Timeline", to: '#' },
      { label: "Coming Soon", to: '#' },
      { label: "Maintenance", to: '#' },
      { label: "404", to: '#' },
      { label: "Offline", to: '#' }
    ]
   },
  { label: "Basic Auth", icon: 'iconify lucide--lock',
    children: [
      { label: "Login", to: '#' },
      { label: "Register", to: '#' },
      { label: "Verify Email", to: '#' },
      { label: "Two Steps", to: '#' },
      { label: "Logout", to: '#' },
      { label: "Reset Password", to: '#' },
      { label: "Create Password", to: '#' }
    ]
   },
  { label: "Cover Auth", icon: 'iconify lucide--shield-check',
    children: [
      { label: "Login", to: '#' },
      { label: "Register", to: '#' },
      { label: "Verify Email", to: '#' },
      { label: "Two Steps", to: '#' },
      { label: "Logout", to: '#' },
      { label: "Reset Password", to: '#' },
      { label: "Create Password", to: '#' }
    ]
   },
  { label: "Boxed Auth", icon: 'iconify lucide--package',
    children: [
      { label: "Login", to: '#' },
      { label: "Register", to: '#' },
      { label: "Two Steps", to: '#' },
      { label: "Logout", to: '#' },
      { label: "Reset Password", to: '#' },
      { label: "Create Password", to: '#' }
    ]
   },
  { label: "Modern Auth", icon: 'iconify lucide--fingerprint',
    children: [
      { label: "Login", to: '#' },
      { label: "Register", to: '#' },
      { label: "Verify Email", to: '#' },
      { label: "Two Steps", to: '#' },
      { label: "Logout", to: '#' },
      { label: "Reset Password", to: '#' },
      { label: "Create Password", to: '#' }
    ]
   },
  { label: "Layouts", icon: 'iconify lucide--layout-panel-left',
    children: [
      { label: "Hover Sidenav", to: '#' },
      { label: "Hover Active Sidenav", to: '#' },
      { label: "Small Sidenav", to: '#' },
      { label: "Compact Sidenav", to: '#' },
      { label: "Offcanvas Sidenav", to: '#' },
      { label: "Hidden Sidenav", to: '#' },
      { label: "Dark Sidenav", to: '#' },
      { label: "Dark Mode", to: '#' },
      { label: "RTL Mode", to: '#' }
    ]
   },
  { title: "Components" },
  { label: "UI Elements", icon: 'iconify lucide--life-buoy',
    children: [
      { label: "Alerts", to: '#' },
      { label: "Avatar", to: '#' },
      { label: "Buttons", to: '#' },
      { label: "Label", to: '#' },
      { label: "Cards", to: '#' },
      { label: "Collapse", to: '#' },
      { label: "Countdown", to: '#' },
      { label: "Drawer", to: '#' },
      { label: "Dropdown", to: '#' },
      { label: "Gallery", to: '#' },
      { label: "Lists", to: '#' },
      { label: "Modal", to: '#' },
      { label: "Spinners", to: '#' },
      { label: "Timeline", to: '#' },
      { label: "Progress Bar", to: '#' },
      { label: "Tooltip", to: '#' },
      { label: "Video", to: '#' }
    ]
   },
  { label: "Plugins", icon: 'iconify lucide--package-plus',
    children: [
      { label: "Sweetalert", to: '#' },
      { label: "Simplebar", to: '#' },
      { label: "Lightbox", to: '#' },
      { label: "Video Player", to: '#' }
    ]
   },
  { label: "Navigation", icon: 'iconify lucide--locate-fixed',
    children: [
      { label: "Navbar", to: '#' },
      { label: "Tabs", to: '#' },
      { label: "Breadcrumb", to: '#' },
      { label: "Pagination", to: '#' }
    ]
   },
  { label: "Forms", icon: 'iconify lucide--file',
    children: [
      { label: "Basic", to: '#' },
      { label: "Layouts", to: '#' },
      { label: "Input Mask", to: '#' },
      { label: "Select", to: '#' },
      { label: "Checkbox & Radio", to: '#' },
      { label: "Switches", to: '#' },
      { label: "Wizards", to: '#' },
      { label: "File Upload", to: '#' },
      { label: "Date Picker", to: '#' },
      { label: "Time Picker", to: '#' },
      { label: "Color Picker", to: '#' },
      { label: "Multi Select", to: '#' },
      { label: "Input Spin", to: '#' },
      { label: "Clipboard", to: '#' },
      { label: "Editor", to: '#' }
    ]
   },
  { label: "Tables", icon: 'iconify lucide--table',
    children: [
      { label: "Basic Table", to: '#' },
      { label: "Grid Js", to: '#' }
    ]
   },
  { label: "Apexcharts", icon: 'iconify lucide--pie-chart',
    children: [
      { label: "Area", to: '#' },
      { label: "Bar", to: '#' },
      { label: "Boxplot", to: '#' },
      { label: "Bubble", to: '#' },
      { label: "Candlstick", to: '#' },
      { label: "Column", to: '#' },
      { label: "Funnel", to: '#' },
      { label: "Heatmap", to: '#' },
      { label: "Line", to: '#' },
      { label: "Mixed", to: '#' },
      { label: "Pie", to: '#' },
      { label: "Polar Area", to: '#' },
      { label: "Radar", to: '#' },
      { label: "Radialbar", to: '#' },
      { label: "Range Area", to: '#' },
      { label: "Scatter", to: '#' },
      { label: "Timeline", to: '#' },
      { label: "Treemap", to: '#' }
    ]
   },
  { label: "Icons", icon: 'iconify lucide--trophy',
    children: [
      { label: "Remix", to: '#' },
      { label: "Lucide", to: '#' }
    ]
   },
  { label: "Maps", icon: 'iconify lucide--map',
    children: [
      { label: "Google Maps", to: '#' },
      { label: "Leaflet Map", to: '#' }
    ]
   },
  { label: "Multi Level", icon: 'iconify lucide--share-2',
    children: [
      { label: "Item 1", to: '#' },
      { label: "Item 2", to: '#' }
    ]
   }
]
