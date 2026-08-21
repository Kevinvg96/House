// ROOM MANIFEST
// -----------------------------------------------------------------
// Folders live directly in the repo root (main), next to index.html
// — NOT inside a "rooms" folder. "id" must match that folder name
// EXACTLY, capitalisation included (GitHub Pages is case-sensitive).
//
// "photos" lists the file(s) inside that folder. One photo in a
// room? List one. Multiple angles of the same room? List more — a
// "hoek"-balkje appears automatically above the door strip whenever
// a room has more than one photo.
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
      { label: "Overzicht", file: "MasterBedroom.jpg" },
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

  // These two didn't have a matching folder in your repo yet — make
  // a folder in main with the id below, drop the photo in, and
  // uncomment the block to add it to the tour.
  // {
  //   id: "kleinste-slaapkamer",
  //   label: "Kleinste slaapkamer",
  //   photos: [
  //     { label: "Overzicht", file: "KleinsteSlaapKamer.jpg" },
  //   ],
  // },
  // {
  //   id: "extra-kamer",
  //   label: "Extra kamer",
  //   photos: [
  //     { label: "Overzicht", file: "extrakamer.jpg" },
  //   ],
  // },
];
