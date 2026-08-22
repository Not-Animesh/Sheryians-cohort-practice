const users = [
  {
    name: "Alex Carter",
    bio: "Frontend developer who loves clean interfaces.",
    image: "https://i.pravatar.cc/500?img=12"
  },
  {
    name: "Sarah Wilson",
    bio: "UI designer turning ideas into simple experiences.",
    image: "https://i.pravatar.cc/500?img=47"
  },
  {
    name: "David Miller",
    bio: "Backend developer working with Node.js and APIs.",
    image: "https://i.pravatar.cc/500?img=11"
  },
  {
    name: "Emily Johnson",
    bio: "Product designer focused on user experience.",
    image: "https://i.pravatar.cc/500?img=44"
  },
  {
    name: "Michael Brown",
    bio: "Full-stack developer and open-source enthusiast.",
    image: "https://i.pravatar.cc/500?img=13"
  },
  {
    name: "Sophia Davis",
    bio: "JavaScript developer building modern web apps.",
    image: "https://i.pravatar.cc/500?img=32"
  },
  {
    name: "Daniel Smith",
    bio: "Software engineer interested in cloud computing.",
    image: "https://i.pravatar.cc/500?img=14"
  },
  {
    name: "Olivia Taylor",
    bio: "Creative developer who enjoys interactive websites.",
    image: "https://i.pravatar.cc/500?img=49"
  },
  {
    name: "James Anderson",
    bio: "Developer exploring AI and machine learning.",
    image: "https://i.pravatar.cc/500?img=15"
  }
];

const search = document.getElementById("search");
const usersContainer = document.getElementById("users");

function displayUsers(userList) {
  if (userList.length === 0) {
    usersContainer.innerHTML =
      `<p class="no-user">No user found</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();

  userList.forEach(user => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
      <img src="${user.image}" alt="${user.name}">
      <div class="card-content">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
      </div>
    `;

    fragment.appendChild(card);
  });

  usersContainer.replaceChildren(fragment);
}

// Show all users initially
displayUsers(users);

// Search on every input
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.bio.toLowerCase().includes(query)
  );

  displayUsers(filteredUsers);
});