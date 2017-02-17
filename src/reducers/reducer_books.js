/* A reducer returns the value for a *piece* of state. The mapping is
   1-1, each reducer returns one piece of state. */

export default function() {
  return [
    { title: 'JavaScript: The Good Parts', pages: 101 },
    { title: 'Harry Potter', pages: 39 },
    { title: 'The Dark Tower', pages: 81 },
    { title: 'Eloquent Ruby', pages: 1 }
  ];
}
