# 🌐 PymeUp
**PymeUp** es una plataforma inteligente diseñada para ayudar a pequeñas y medianas empresas (PYMEs) a optimizar su gestión financiera mediante análisis en tiempo real y recomendaciones inteligentes.

Este repositorio contiene el desarrollo de la aplicación web de PymeUp.

---

## 🚀 Tecnologías utilizadas

- **React**: Biblioteca para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción y desarrollo rápida.
- **Tailwind CSS**: Framework CSS para crear interfaces modernas y personalizables.
- **Axios**: Cliente HTTP para realizar peticiones API.
- **React Router**: Librería para la gestión de rutas en la aplicación.
- **Zustand**: Librería para el manejo de estado global.
- **ESLint & Prettier**: Herramientas de análisis estático y formato de código.

---

## 📦 Estructura de ramas

Este repositorio sigue una convención de ramas para facilitar el desarrollo y las contribuciones:

- **main**: Rama principal con la versión estable de la aplicación.
- **dev**: Rama de desarrollo con nuevas funcionalidades en progreso.
- **feature/{nombre}**: Rama de características específicas en desarrollo.
- **bugfix/{nombre}**: Rama para corrección de errores.
- **hotfix/{nombre}**: Rama para correcciones críticas que se necesitan aplicar rápidamente.

---

## 📁 Estructura del Proyecto

La estructura del proyecto sigue una organización modular para facilitar el desarrollo y escalabilidad. A continuación se muestra la estructura de carpetas:

pymeup/
├── public/
│ ├── favicon.svg # Ícono del sitio
│ ├── logo.svg # Logo principal
│ └── index.html # Archivo HTML principal (referencia las fuentes y punto de montaje)
│
├── src/
│ ├── assets/ # Archivos estáticos usados en todo el proyecto
│ │ ├── images/ # Logos, ilustraciones, gráficos
│ │ ├── icons/ # Íconos SVG u otros
│ │ └── fonts/ # Fuentes personalizadas si no usas Google Fonts
│
│ ├── components/ # Componentes reutilizables y atómicos
│ │ ├── ui/ # Botones, inputs, modales, etc.
│ │ │ ├── Button.jsx
│ │ │ ├── Input.jsx
│ │ │ └── Modal.jsx
│ │ ├── layout/ # Estructura visual global (Header, Footer, Sidebar)
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── Sidebar.jsx
│ │ ├── forms/ # Formularios genéricos
│ │ │ ├── LoginForm.jsx
│ │ │ ├── RegisterForm.jsx
│ │ │ └── ContactForm.jsx
│ │ └── ... # Otros componentes globales
│
│ ├── features/ # Módulos completos (dominio funcional)
│ │ ├── dashboard/ # Lógica + componentes del panel de usuario
│ │ │ ├── Dashboard.jsx
│ │ │ └── components/ # Subcomponentes específicos del dashboard
│ │ ├── finances/ # Sección de finanzas (gráficas, informes)
│ │ │ └── FinancesPage.jsx
│ │ └── auth/ # Inicio de sesión, registro, recuperación
│ │ └── AuthService.js
│
│ ├── hooks/ # Custom Hooks (uso de lógica reutilizable)
│ │ ├── useAuth.js # Hook para autenticación
│ │ └── useFetch.js # Hook para peticiones API
│
│ ├── layouts/ # Plantillas generales de diseño
│ │ ├── DashboardLayout.jsx
│ │ ├── AuthLayout.jsx
│ │ └── PublicLayout.jsx
│
│ ├── pages/ # Páginas vinculadas a rutas
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── NotFound.jsx
│
│ ├── router/ # Configuración de rutas
│ │ └── routes.jsx # Definición de rutas con React Router
│
│ ├── services/ # Conexión a API y lógica de backend
│ │ ├── api.js # Instancia de Axios
│ │ └── userService.js # Funciones relacionadas con usuarios
│
│ ├── store/ # Estado global (Zustand, Redux, Context API)
│ │ └── authStore.js
│
│ ├── styles/ # Estilos globales y configuraciones
│ │ ├── tailwind.css # Archivo que importa tailwind directives
│ │ ├── variables.css # Variables CSS personalizadas (opcional)
│ │ └── animations.css # Animaciones generales (opcional)
│
│ ├── utils/ # Funciones auxiliares reutilizables
│ │ ├── formatDate.js
│ │ └── currencyFormatter.js
│
│ ├── App.jsx # Componente raíz (incluye router y layout)
│ └── main.jsx # Punto de entrada que renderiza App
│
├── .env # Variables de entorno (URLs, claves API)
├── tailwind.config.js # Configuración de Tailwind
├── postcss.config.js # Requerido por Tailwind
├── vite.config.js # Configuración del bundler
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación general

less
Copiar
Editar

---

## 📖 Convención de commits

Para mantener un historial de commits claro, coherente y fácil de leer, en este repositorio usamos la convención de mensajes conocida como **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**. Esta convención facilita la colaboración en equipo, automatiza changelogs y permite un control de versiones más inteligente.

### ✅ Tipos permitidos

| Tipo       | Descripción |
|------------|-------------|
| `feat:`    | Añadir una nueva funcionalidad |
| `fix:`     | Corrección de errores o bugs |
| `docs:`    | Cambios en la documentación |
| `style:`   | Formato de código (sin afectar funcionalidad) |
| `refactor:`| Refactorización del código existente |
| `test:`    | Agregar o modificar pruebas |
| `chore:`   | Tareas de mantenimiento, scripts o dependencias |

### 📌 Ejemplos

```bash
git commit -m "feat: agregar componente de login"
git commit -m "fix: corregir error en validación del email"
git commit -m "docs: actualizar sección de instalación en README"
git commit -m "refactor: optimizar lógica de carga de datos"
