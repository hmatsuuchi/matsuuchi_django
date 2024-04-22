/* set the top row data */
function setCurrentDateRowData() {
  const dayOfWeekLookup = {
    0: "日",
    1: "月",
    2: "火",
    3: "水",
    4: "木",
    5: "金",
    6: "土",
  };

  const dateCell = document.getElementById("date-today");

  /* set current date */
  const today = new Date();
  dateCell.innerHTML = `${today.getMonth() + 1}月${today.getDate()}日 (${
    dayOfWeekLookup[today.getDay()]
  })`;
}

/* handles clicks to buttons that indicate who fed the fish */
function setFishFedPerson(event) {
  const fishFedPersonToday = document.getElementById("fish-fed-person-today");
  const originalNode = fishFedPersonToday.cloneNode(true);

  fishFedPersonToday.innerHTML = event.target.innerHTML;
  fishFedPersonToday.className = "fish-fed-person-today";
  fishFedPersonToday.classList.add(event.target.classList[0]);
  fishFedPersonToday.setAttribute(
    "data-person-integer",
    event.target.getAttribute("data-person-integer")
  );

  if (
    originalNode.getAttribute("data-person-integer") !==
    event.target.getAttribute("data-person-integer")
  ) {
    sendData();
  }
}

/* handles clicks to buttons that indicate who cleaned the tank */
function setTankCleanedPerson(event) {
  const tankCleanedPersonToday = document.getElementById(
    "tank-cleaned-person-today"
  );
  const originalNode = tankCleanedPersonToday.cloneNode(true);

  tankCleanedPersonToday.innerHTML = event.target.innerHTML;
  tankCleanedPersonToday.className = "tank-cleaned-person-today";
  tankCleanedPersonToday.classList.add(event.target.classList[0]);
  tankCleanedPersonToday.setAttribute(
    "data-person-integer",
    event.target.getAttribute("data-person-integer")
  );

  if (
    originalNode.getAttribute("data-person-integer") !==
    event.target.getAttribute("data-person-integer")
  ) {
    sendData();
  }
}

/* sends data to server */
function sendData() {
  console.log("sending data");

  const fishFedPersonToday = document.getElementById("fish-fed-person-today");
  const tankCleanedPersonToday = document.getElementById(
    "tank-cleaned-person-today"
  );

  const data = {
    fish_fed_person: fishFedPersonToday.getAttribute("data-person-integer"),
    tank_cleaned_person: tankCleanedPersonToday.getAttribute(
      "data-person-integer"
    ),
  };

  fetch("/jba/projects/fish_feeding/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    },
    body: JSON.stringify(data),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
}

/* drives code */
setCurrentDateRowData();
