/* A reducer returns the value for a *piece* of state. The mapping is
   1-1, each reducer returns one piece of state. */

export default function() {
  return [
    { title: 'JavaScript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ];
}
