// ==========================================
// STORAGE
// ==========================================

const STORAGE_KEY = "call_notes_v2";


// ==========================================
// DOM ELEMENTS
// ==========================================

const noteContainer =
  document.getElementById("noteContainer");

const formContainer =
  document.getElementById("formContainer");

const addBtn =
  document.getElementById("addBtn");

const closeBtn =
  document.getElementById("closeBtn");

const form =
  document.getElementById("callForm");


// ==========================================
// CURRENT FILTER
// ==========================================

let currentFilter = "all";


// ==========================================
// DEFAULT DATA
// ==========================================

const defaultNotes = [

  {
    id: 1,

    image:
      "https://i.pravatar.cc/150?img=47",

    name:
      "Fatima Uma",

    town:
      "Singapore",

    purpose:
      "Quick appointment note",

    bookings:
      3,

    category:
      "Emergency"
  },


  {
    id: 2,

    image:
      "https://i.pravatar.cc/150?img=12",

    name:
      "Alex Carter",

    town:
      "London",

    purpose:
      "Project discussion",

    bookings:
      5,

    category:
      "Important"
  },


  {
    id: 3,

    image:
      "https://i.pravatar.cc/150?img=32",

    name:
      "Sophia Davis",

    town:
      "New York",

    purpose:
      "Client meeting",

    bookings:
      2,

    category:
      "Urgent"
  },


  {
    id: 4,

    image:
      "https://i.pravatar.cc/150?img=13",

    name:
      "Michael Brown",

    town:
      "Toronto",

    purpose:
      "General discussion",

    bookings:
      7,

    category:
      "No Rush"
  }

];


// ==========================================
// GET DATA FROM LOCAL STORAGE
// ==========================================

function getNotes() {

  return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || [];

}


// ==========================================
// SAVE DATA TO LOCAL STORAGE
// ==========================================

function saveNotes(notes) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notes)
  );

}


// ==========================================
// INITIALIZE DATA
// ==========================================

function initializeData() {

  const notes = getNotes();


  // Only add default data
  // if localStorage is empty.

  if (notes.length === 0) {

    saveNotes(defaultNotes);

  }

}


// ==========================================
// RENDER NOTES
// ==========================================

function renderNotes() {

  // IMPORTANT:
  // Always read from localStorage

  const notes = getNotes();


  // ========================================
  // FILTER
  // ========================================

  let filteredNotes = notes;


  if (currentFilter !== "all") {

    filteredNotes = notes.filter(
      note =>
        note.category === currentFilter
    );

  }


  // ========================================
  // NO RESULT
  // ========================================

  if (filteredNotes.length === 0) {

    noteContainer.innerHTML = `

      <div
        class="h-[190px]
               flex items-center
               justify-center"
      >

        <p class="text-gray-400">
          No call found
        </p>

      </div>

    `;

    return;

  }


  // ========================================
  // SHOW FIRST MATCHING NOTE
  // ========================================

  const note = filteredNotes[0];


  noteContainer.innerHTML = `

    <!-- IMAGE -->

    <img
      src="${note.image}"
      alt="${note.name}"
      class="w-11 h-11
             rounded-full
             object-cover mb-3"
    >


    <!-- NAME -->

    <h2 class="text-xl font-bold">
      ${note.name}
    </h2>


    <!-- INFORMATION -->

    <div class="mt-3 space-y-2 text-sm">


      <!-- TOWN -->

      <div class="flex justify-between">

        <span class="text-gray-500">
          Home town
        </span>

        <span>
          ${note.town}
        </span>

      </div>


      <!-- BOOKINGS -->

      <div class="flex justify-between">

        <span class="text-gray-500">
          Bookings
        </span>

        <span>
          ${note.bookings} times
        </span>

      </div>


      <!-- CATEGORY -->

      <div class="flex justify-between">

        <span class="text-gray-500">
          Category
        </span>

        <span>
          ${note.category}
        </span>

      </div>

    </div>


    <!-- BUTTONS -->

    <div class="flex gap-2 mt-4">


      <!-- CALL -->

      <button
        onclick="callUser(${note.id})"
        class="bg-black text-white
               rounded-full px-4 py-2 text-sm"
      >
        ☎ Call
      </button>


      <!-- MESSAGE -->

      <button
        onclick="messageUser(${note.id})"
        class="bg-gray-100
               rounded-full px-4 py-2 text-sm"
      >
        Message
      </button>

    </div>

  `;

}


// ==========================================
// OPEN FORM
// ==========================================

addBtn.addEventListener("click", () => {

  formContainer.classList.remove("hidden");

  formContainer.classList.add("flex");

});


// ==========================================
// CLOSE FORM
// ==========================================

closeBtn.addEventListener("click", () => {

  formContainer.classList.add("hidden");

  formContainer.classList.remove("flex");

  form.reset();

});


// ==========================================
// CREATE NEW NOTE
// ==========================================

form.addEventListener("submit", (event) => {

  event.preventDefault();


  // ========================================
  // GET FORM VALUES
  // ========================================

  const image =
    document.getElementById("image")
      .value
      .trim();


  const name =
    document.getElementById("name")
      .value
      .trim();


  const town =
    document.getElementById("town")
      .value
      .trim();


  const purpose =
    document.getElementById("purpose")
      .value
      .trim();


  // ========================================
  // GET SELECTED CATEGORY
  // ========================================

  const selectedCategory =
    document.querySelector(
      'input[name="category"]:checked'
    );


  if (!selectedCategory) {

    alert(
      "Please select a category."
    );

    return;

  }


  const category =
    selectedCategory.value;


  // ========================================
  // CREATE OBJECT
  // ========================================

  const newNote = {

    id:
      Date.now(),

    image:
      image,

    name:
      name,

    town:
      town,

    purpose:
      purpose,

    bookings:
      0,

    category:
      category

  };


  // ========================================
  // GET EXISTING NOTES
  // ========================================

  const notes =
    getNotes();


  // ========================================
  // ADD NEW NOTE
  // ========================================

  notes.push(newNote);


  // ========================================
  // SAVE
  // ========================================

  saveNotes(notes);


  // ========================================
  // CLOSE FORM
  // ========================================

  formContainer.classList.add("hidden");

  formContainer.classList.remove("flex");


  form.reset();


  // ========================================
  // SHOW DATA
  // ========================================

  renderNotes();

});


// ==========================================
// FILTER BUTTONS
// ==========================================

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      // Get selected filter

      currentFilter =
        button.dataset.filter;


      // Render matching note

      renderNotes();

    });

  });


// ==========================================
// CALL USER
// ==========================================

function callUser(id) {

  const notes =
    getNotes();


  // Find user

  const note =
    notes.find(
      note => note.id === id
    );


  if (!note) return;


  // Increase booking

  note.bookings++;


  // Save

  saveNotes(notes);


  // Render

  renderNotes();


  alert(
    `Calling ${note.name}`
  );

}


// ==========================================
// MESSAGE USER
// ==========================================

function messageUser(id) {

  const notes =
    getNotes();


  const note =
    notes.find(
      note => note.id === id
    );


  if (!note) return;


  alert(
    `Message ${note.name}`
  );

}


// ==========================================
// SORT HIGH → LOW
// ==========================================

document
  .getElementById("sortUp")
  .addEventListener("click", () => {

    const notes =
      getNotes();


    notes.sort(
      (a, b) =>
        b.bookings - a.bookings
    );


    saveNotes(notes);


    renderNotes();

  });


// ==========================================
// SORT LOW → HIGH
// ==========================================

document
  .getElementById("sortDown")
  .addEventListener("click", () => {

    const notes =
      getNotes();


    notes.sort(
      (a, b) =>
        a.bookings - b.bookings
    );


    saveNotes(notes);


    renderNotes();

  });


// ==========================================
// INITIAL LOAD
// ==========================================

initializeData();

renderNotes();