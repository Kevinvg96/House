// ROOM MANIFEST
// -----------------------------------------------------------------
// One entry per room. "id" must match the folder name under /rooms.
// "photos" is a list of equirectangular (360°) images inside that
// folder — export each from Insta360 Studio/app as a flat JPG/PNG.
//
// One photo in a room? Just list one. Multiple angles/corners of
// the same room? Add more entries — a small "hoek"-balkje appears
// automatically whenever a room has more than one photo.
//
// To add a room: duplicate a block, make a matching folder in
// /rooms, drop the photo/photos in, done. Order here = order in
// the door strip (rooms) and the angle strip (photos per room).
// -----------------------------------------------------------------

const ROOMS = [
  {
    id: "hal",
    label: "Hal",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "woonkamer",
    label: "Woonkamer",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
      // { label: "Bij het raam", file: "pano-2.jpg" },
    ],
  },
  {
    id: "keuken",
    label: "Keuken",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "slaapkamer",
    label: "Slaapkamer",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "badkamer",
    label: "Badkamer",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "garage",
    label: "Garage",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "bureau",
    label: "Bureau",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
  {
    id: "wasplaats",
    label: "Wasplaats",
    photos: [
      { label: "Overzicht", file: "pano.jpg" },
    ],
  },
];
