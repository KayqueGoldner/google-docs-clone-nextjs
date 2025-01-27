# [Google Docs Clone](https://google-docs-clone-nextjs-indol.vercel.app/)  

**A simplified Google Docs clone that enables real-time collaborative document editing. The project leverages modern technologies to deliver an efficient and interactive experience.**

![Application Screenshot](/google-docs-clone.png "Application Screenshot")  

## 🚀 Features  

- **Authentication**: Secure login via OAuth and email.  
- **Advanced Text Editor**: A rich text editor with basic formatting and media support.  
- **Real-Time Collaboration**: Multiple users can edit documents simultaneously. 
- **Comments and Mentions**: Add comments and mention users for collaboration.  
- **Notifications**: Real-time updates on document changes and mentions.  
- **Templates**: Pre-designed templates for quick document creation.  
- **Export Document**: Export documents in formats like PDF and TXT.  
- **Organization Workspaces**: Manage and organize documents in team spaces.  
- **Organization Invites**: Invite team members to join workspaces.  
- **Responsive Design**: Works seamlessly on all device sizes.  


## 🛠️ Technologies Used  

- **Frontend**:  
  - [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.  
  - [Tiptap](https://tiptap.dev/product/editor) - An advanced, extensible text editor built on top of ProseMirror.  

- **Backend**:  
  - [Convex](https://www.convex.dev/) - A platform for data management and real-time synchronization.  
  - [Liveblocks](https://liveblocks.io/) - A library that simplifies real-time collaboration with features like presence, live editing, and synchronization.  

- **Programming Language**:  
  - [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for robust development.  

- **Styling**:  
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.  
  - [Shadcn UI](https://ui.shadcn.com/) - A collection of accessible and customizable UI components.  

- **Authentication**:  
  - [Clerk](https://clerk.com/) - A service for authentication and user management, supporting social logins, identity verification, and more.  

## 📦 NPM Packages  

- [Nuqs](https://nuqs.47ng.com/) - Type-safe search parameters state manager for React.  
- [Lucide](https://lucide.dev/) - Open-source icon library with customizable and modern icons.  
- [React Icons](https://react-icons.github.io/react-icons/) - Popular library for including icons in React applications.  
- [Sonner](https://sonner.emilkowal.ski/) - Opinionated toast notification component for React.  
- [Embla Carousel](https://www.embla-carousel.com/get-started/react/) - Lightweight, dependency-free carousel library for React.  


## 💻 Setup

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/KayqueGoldner/google-docs-clone-nextjs.git
```

### 2. Install Dependencies

```bash
cd google-docs-clone-nextjs
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

```bash
CONVEX_DEPLOYMENT=<your_convex_deployment>
NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your_liveblocks_public_key>
LIVEBLOCKS_SECRET_KEY=<your_liveblocks_secret_key>
```

### 4. Run the Application

```bash
npm run dev
```

### 5. Access the Application

**You can access the application by opening the following URL in your browser:
http://localhost:3000**