let viewer = null;
let currentRoomIndex = 0;
let currentPhotoIndex = 0;

function photoPath(room, photo) {
  return `${room.id}/${photo.file}`;
}

function loadPhoto(roomIndex, photoIndex) {
  const room = ROOMS[roomIndex];
  const photo = room.photos[photoIndex];
  if (!room || !photo) return;

  currentRoomIndex = roomIndex;
  currentPhotoIndex = photoIndex;

  document.getElementById("room-name").textContent = room.label;
  document.getElementById("room-count").textContent =
    `Kamer ${roomIndex + 1} van ${ROOMS.length}`;

  document.querySelectorAll(".door").forEach((el, i) => {
    el.classList.toggle("active", i === roomIndex);
  });

  buildAngleStrip(room, photoIndex);

  const scene = {
    type: "equirectangular",
    panorama: photoPath(room, photo),
    autoLoad: true,
    compass: false,
  };

  if (viewer) {
    viewer.destroy();
    viewer = null;
  }

  document.getElementById("missing-photo").style.display = "none";

  // Check the image actually exists before handing it to Pannellum,
  // so an un-added photo shows a friendly message instead of a broken viewer.
  const probe = new Image();
  probe.onload = () => {
    viewer = pannellum.viewer("panorama", scene);
  };
  probe.onerror = () => {
    document.getElementById("missing-photo").style.display = "flex";
  };
  probe.src = photoPath(room, photo) + `?t=${Date.now()}`;
}

function loadRoom(roomIndex) {
  loadPhoto(roomIndex, 0);
}

function buildDoorStrip() {
  const strip = document.getElementById("door-strip");
  strip.innerHTML = "";
  ROOMS.forEach((room, i) => {
    const btn = document.createElement("button");
    btn.className = "door";
    btn.type = "button";
    btn.innerHTML = `<span class="door-num">${String(i + 1).padStart(2, "0")}</span><span class="door-label">${room.label}</span>`;
    btn.addEventListener("click", () => loadRoom(i));
    strip.appendChild(btn);
  });
}

function buildAngleStrip(room, activePhotoIndex) {
  const wrap = document.getElementById("angle-strip-wrap");
  const strip = document.getElementById("angle-strip");
  strip.innerHTML = "";

  // Only show this strip when the room actually has more than one photo.
  if (!room.photos || room.photos.length <= 1) {
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "flex";

  room.photos.forEach((photo, i) => {
    const btn = document.createElement("button");
    btn.className = "angle-chip";
    btn.type = "button";
    btn.textContent = photo.label || `Hoek ${i + 1}`;
    btn.classList.toggle("active", i === activePhotoIndex);
    btn.addEventListener("click", () => loadPhoto(currentRoomIndex, i));
    strip.appendChild(btn);
  });
}

function nextRoom() {
  loadRoom((currentRoomIndex + 1) % ROOMS.length);
}
function prevRoom() {
  loadRoom((currentRoomIndex - 1 + ROOMS.length) % ROOMS.length);
}

document.addEventListener("DOMContentLoaded", () => {
  buildDoorStrip();
  loadRoom(0);
  document.getElementById("next-btn").addEventListener("click", nextRoom);
  document.getElementById("prev-btn").addEventListener("click", prevRoom);

  const welcome = document.getElementById("welcome");
  document.getElementById("enter-btn").addEventListener("click", () => {
    welcome.classList.add("hidden");
  });
});
