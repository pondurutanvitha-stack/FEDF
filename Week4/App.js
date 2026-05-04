// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Tanvitha", email: "tanvitha@gmail.com" },
                        { id: 2, name: "Kavya", email: "kavya@gmail.com" },
                        { id: 3, name: "Priya", email: "priya@gmail.com" },
                        { id: 4, name: "Arjun", email: "arjun@gmail.com" },
                        { id: 5, name: "Mahesh", email: "mahesh@gmail.com" },
                        { id: 6, name: "Karthik", email: "karthik@gmail.com" },
                        { id: 7, name: "Navya", email: "navya@gmail.com" },
                        { id: 8, name: "Ramya", email: "ramya@gmail.com" },
                        { id: 9, name: "Keerthy", email: "keerthy@gmail.com" },
                        { id: 10, name: "Divya", email: "divya@gmail.com" },
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
