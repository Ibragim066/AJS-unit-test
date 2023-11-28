export default function sortCharacters(characters) {
  characters.sort((a, b) => a.health - b.health);
}
