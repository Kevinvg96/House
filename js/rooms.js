// ROOM MANIFEST
// -----------------------------------------------------------------
// Folders live directly in the repo root (main), next to index.html
// — NOT inside a "rooms" folder. "id" must match that folder name
// EXACTLY, capitalisation included (GitHub Pages is case-sensitive).
//
// "photos" lists the file(s) inside that folder. One photo in a
// room? List one. Multiple angles/sub-rooms? List more — a
// "hoek"-balkje appears automatically above the door strip whenever
// a room has more than one photo. Each photo normally lives in the
// room's own folder (matching "id"), but you can add an optional
// "folder" to a photo to pull it from a different folder instead —
// handy for grouping several small rooms under one door, like the
// bedrooms below.
// -----------------------------------------------------------------

const ROOMS = [
  {
    id: "hal",
    label: "Hal",
    photos: [
      { label: "Boven",   file: "Hallway_Upstairs.jpg" },
      { label: "Beneden", file: "Halbenden.jpg" },
    ],
  },
  {
    id: "woonkamer",
    label: "Woonkamer",
    photos: [
      { label: "Overzicht",  file: "Living1.jpg" },
      { label: "Andere hoek", file: "Living2.jpg" },
      { label: "Andere Nieuwe Kleur", file: "woonkamer3.jpg" },
    ],
  },
  {
    id: "keuken",
    label: "Keuken",
    photos: [
      { label: "Overzicht", file: "Keuken.jpg" },
    ],
  },
  {
    id: "badkamer",
    label: "Badkamer",
    photos: [
      { label: "Overzicht",   file: "Badkamer1.jpg" },
      { label: "Andere hoek", file: "Badkamer2.jpg" },
    ],
  },
  {
    id: "slaapkamer",
    label: "Slaapkamer",
    photos: [
      { label: "Master Bedroom",     file: "MasterBedroom.jpg" },
      { label: "Kleinste slaapkamer", file: "KleinsteSlaapKamer.jpg"},
      { label: "Extra slaapkamer",         file: "extrakamer.jpg"},
    ],
  },
  {
    id: "Bureau",
    label: "Bureau",
    photos: [
      { label: "Overzicht", file: "Bureau.jpg" },
    ],
  },
  {
    id: "Garage",
    label: "Garage",
    photos: [
      { label: "Overzicht", file: "garage.jpg" },
    ],
  },
  {
    id: "Wasplaats",
    label: "Wasplaats",
    photos: [
      { label: "Overzicht", file: "Wasplaats.jpg" },
    ],
  },

  // Note: kleinste-slaapkamer and extra-kamer are folded into the
  // "slaapkamer" door above as extra photos (with their own
  // "folder" override) rather than separate doors — see there.
];
