// ============================================================
// WEB STORAGE PRACTICE
// ============================================================
//
// There are three common browser storage concepts:
//
// 1. localStorage
// 2. sessionStorage
// 3. Cookies
//
// ------------------------------------------------------------
//
// localStorage
// ----------------
// Data remains after:
// - Refreshing the page
// - Closing the tab
// - Closing the browser
//
// Example:
// localStorage.setItem("name", "Animesh");
//
// ------------------------------------------------------------
//
// sessionStorage
// ----------------
// Data remains while the current tab/session is open.
//
// Refreshing the page -> data remains
// Closing the tab -> data is removed
//
// Example:
// sessionStorage.setItem("name", "Animesh");
//
// ------------------------------------------------------------
//
// Cookies
// ----------------
// Small pieces of data stored by the browser.
//
// Cookies can have an expiration date.
//
// Example:
// document.cookie = "username=Animesh; max-age=3600; path=/";
//
// ============================================================



// ============================================================
// 1. LOCAL STORAGE
// ============================================================


// -----------------------------------------
// SAVE DATA
// -----------------------------------------
//
// setItem(key, value)
//
// Both key and value are strings.
//
// Example:
//
// localStorage.setItem("username", "Animesh");
//
// -----------------------------------------

document
  .getElementById("localSave")
  .addEventListener("click", () => {

    const value =
      document.getElementById("localInput").value;


    if (value === "") {

      alert("Enter something first.");

      return;

    }


    localStorage.setItem(
      "username",
      value
    );


    document.getElementById("localResult").textContent =
      "Saved: " + value;

  });


// -----------------------------------------
// GET DATA
// -----------------------------------------
//
// getItem(key)
//
// -----------------------------------------

document
  .getElementById("localGet")
  .addEventListener("click", () => {

    const value =
      localStorage.getItem("username");


    if (value === null) {

      document.getElementById("localResult").textContent =
        "No localStorage data.";

      return;

    }


    document.getElementById("localResult").textContent =
      "Stored value: " + value;

  });


// -----------------------------------------
// REMOVE ONE ITEM
// -----------------------------------------
//
// removeItem(key)
//
// -----------------------------------------

document
  .getElementById("localRemove")
  .addEventListener("click", () => {

    localStorage.removeItem("username");


    document.getElementById("localResult").textContent =
      "username removed.";

  });


// -----------------------------------------
// CLEAR EVERYTHING
// -----------------------------------------
//
// clear()
//
// Removes ALL localStorage data
// belonging to this website.
//
// -----------------------------------------

document
  .getElementById("localClear")
  .addEventListener("click", () => {

    localStorage.clear();


    document.getElementById("localResult").textContent =
      "All localStorage cleared.";

  });



// ============================================================
// 2. SESSION STORAGE
// ============================================================


// -----------------------------------------
// SAVE
// -----------------------------------------

document
  .getElementById("sessionSave")
  .addEventListener("click", () => {

    const value =
      document.getElementById("sessionInput").value;


    if (value === "") {

      alert("Enter something first.");

      return;

    }


    sessionStorage.setItem(
      "sessionName",
      value
    );


    document.getElementById("sessionResult").textContent =
      "Saved: " + value;

  });


// -----------------------------------------
// GET
// -----------------------------------------

document
  .getElementById("sessionGet")
  .addEventListener("click", () => {

    const value =
      sessionStorage.getItem("sessionName");


    if (value === null) {

      document.getElementById("sessionResult").textContent =
        "No sessionStorage data.";

      return;

    }


    document.getElementById("sessionResult").textContent =
      "Stored value: " + value;

  });


// -----------------------------------------
// REMOVE ONE ITEM
// -----------------------------------------

document
  .getElementById("sessionRemove")
  .addEventListener("click", () => {

    sessionStorage.removeItem(
      "sessionName"
    );


    document.getElementById("sessionResult").textContent =
      "sessionName removed.";

  });


// -----------------------------------------
// CLEAR EVERYTHING
// -----------------------------------------

document
  .getElementById("sessionClear")
  .addEventListener("click", () => {

    sessionStorage.clear();


    document.getElementById("sessionResult").textContent =
      "All sessionStorage cleared.";

  });



// ============================================================
// 3. COOKIES
// ============================================================
//
// Cookies work differently from localStorage/sessionStorage.
//
// There is no:
// cookie.setItem()
// cookie.getItem()
//
// Instead we use:
//
// document.cookie
//
// ============================================================



// -----------------------------------------
// SAVE COOKIE
// -----------------------------------------
//
// Example:
//
// document.cookie =
//   "username=Animesh; max-age=3600; path=/";
//
// max-age=3600 means:
//
// Cookie will expire after 3600 seconds
// = 1 hour
//
// path=/ means the cookie is available
// throughout the website.
//
// -----------------------------------------

document
  .getElementById("cookieSave")
  .addEventListener("click", () => {

    const value =
      document.getElementById("cookieInput").value;


    if (value === "") {

      alert("Enter something first.");

      return;

    }


    document.cookie =
      "username=" +
      encodeURIComponent(value) +
      "; max-age=3600; path=/";


    document.getElementById("cookieResult").textContent =
      "Cookie saved: " + value;

  });


// -----------------------------------------
// GET COOKIE
// -----------------------------------------
//
// document.cookie returns something like:
//
// username=Animesh; theme=dark
//
// We need to find the cookie we want.
//
// -----------------------------------------

function getCookie(name) {

  const cookies =
    document.cookie.split(";");


  for (let cookie of cookies) {

    cookie = cookie.trim();


    if (
      cookie.startsWith(name + "=")
    ) {

      return decodeURIComponent(
        cookie.substring(
          name.length + 1
        )
      );

    }

  }


  return null;

}


// -----------------------------------------
// GET COOKIE BUTTON
// -----------------------------------------

document
  .getElementById("cookieGet")
  .addEventListener("click", () => {

    const value =
      getCookie("username");


    if (value === null) {

      document.getElementById("cookieResult").textContent =
        "No cookie found.";

      return;

    }


    document.getElementById("cookieResult").textContent =
      "Stored cookie: " + value;

  });


// -----------------------------------------
// REMOVE COOKIE
// -----------------------------------------
//
// To remove a cookie:
//
// Set its max-age to 0.
//
// -----------------------------------------

document
  .getElementById("cookieRemove")
  .addEventListener("click", () => {

    document.cookie =
      "username=; max-age=0; path=/";


    document.getElementById("cookieResult").textContent =
      "Cookie removed.";

  });


// -----------------------------------------
// CLEAR COOKIES
// -----------------------------------------
//
// There is no simple:
//
// document.cookie.clear()
//
// Instead, we find each cookie and
// expire it individually.
// -----------------------------------------

document
  .getElementById("cookieClear")
  .addEventListener("click", () => {

    const cookies =
      document.cookie.split(";");


    cookies.forEach(cookie => {

      const name =
        cookie.split("=")[0].trim();


      document.cookie =
        name +
        "=; max-age=0; path=/";

    });


    document.getElementById("cookieResult").textContent =
      "Cookies cleared.";

  });