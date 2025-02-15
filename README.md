# React + Vite

# Software Developer's Desk

 📌 Project Overview

Software Developer's Desk is a simple and modern blog built with React.js and Firebase, allowing developers to share and explore insights, tutorials, and industry trends. It includes Google Authentication via Firebase and utilizes local storage for data persistence.

---

🚀 Features

- **User Authentication: Google Sign-In with Firebase Authentication.
- **Blog Management: Users can create, read, and delete blog posts.
- **Local Storage: Saves blog data persistently.
- **Responsive UI: Mobile-friendly design with a clean layout.
- **State Management: Managed using React Context API.
- **Error Handling: Ensures a smooth user experience with meaningful error messages.

---

🛠️ Technologies Used

- React.js - Frontend framework
- Firebase Authentication - User login & authentication
- LocalStorage - Data persistence
- React Context API - Global state management
- CSS (or Tailwind/Bootstrap - Styling

---

📂 Project Structure

```
software-developers-desk/
│── public/
│── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Authentication and state management
│   ├── pages/           # Blog pages and authentication pages
│   ├── firebase.js      # Firebase configuration
│   ├── App.js           # Main app entry
│   ├── index.js         # Renders the app
│── .gitignore
│── package.json
│── README.md
```

---

🏗️ Setup and Installation

Prerequisites

- **Node.js & npm** installed on your system.
- **Firebase Project** set up with Google Authentication enabled.

Steps to Run the Project

1. Clone the Repository
    
    ```sh
    git clone https://github.com/your-username/software-developers-desk.git
    cd software-developers-desk
    ```
    
2. Install Dependencies
    
    ```
    npm run dev
    ```
    
3. Set Up Firebase
    
    - Create a new Firebase project.
    - Enable Google Authentication.
    - Get your Firebase config and create a `src/firebase.js` file:
        
        ```javascript
        import { initializeApp } from "firebase/app";
        import { getAuth, GoogleAuthProvider } from "firebase/auth";
        
        const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "your-project.firebaseapp.com",
          projectId: "your-project-id",
          storageBucket: "your-project.appspot.com",
          messagingSenderId: "your-sender-id",
          appId: "your-app-id"
        };
        
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        
        export { auth, provider };
        ```
        
4. Run the Application
    
    ```
    npm run dev
    ```
    

---

 🧑‍💻 Usage

1. Click Sign in with Google to authenticate.
2. Start writing and managing blog posts.
3. View, edit, or delete your posts.
4. Log out anytime to secure your session.

---

 🌟 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your branch and create a pull request.

---

 🛡️ License

This project is open-source and available under the **MIT License**.

---

 📞 Contact

For any queries or suggestions, feel free to contact:

- Developer: John Otiro
- Email: [john1234otiro@gmail.com](mailto:john1234otiro@gmail.com)
- GitHub: [Otiro-John](https://github.com/Otiro-John)

---
Updates will be coming soon 🔜
Happy Coding! 🚀
