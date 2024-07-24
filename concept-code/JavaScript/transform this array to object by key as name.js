const items = [
  { name: "item1", data: { id: 1, value: "value1" } },
  { name: "item2", data: { id: 2, value: "value2" } },
  { name: "item3", data: { id: 3, value: "value3" } },
  { name: "item1", data: { id: 1, value: "value1111" } },
  { name: "item2", data: { id: 2, value: "value222" } },
  { name: "item3", data: { id: 3, value: "value3333" } },
  // Add more items as needed
];

const itemsObject = items.reduce((acc, item) => {
  // Check if the key exists in the accumulator object
  if (!acc[item.name]) {
    // If the key doesn't exist, create a new array with the item
    acc[item.name] = [item];
  } else {
    // If the key already exists, push the item into the existing array
    acc[item.name].push(item);
  }
  return acc;
}, {});

console.log(itemsObject);

// OUTPUT
/*
{
  item1: [
    { name: 'item1', data: { id: 1, value: 'value1' } },
    { name: 'item1', data: { id: 1, value: 'value1111' } }
  ],
  item2: [
    { name: 'item2', data: { id: 2, value: 'value2' } },
    { name: 'item2', data: { id: 2, value: 'value222' } }
  ],
  item3: [
    { name: 'item3', data: { id: 3, value: 'value3' } },
    { name: 'item3', data: { id: 3, value: 'value3333' } }
  ]
}
*/
