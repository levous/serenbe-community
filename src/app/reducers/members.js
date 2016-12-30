const initialState = [
  {
    id: 1,
    firstName: 'Fred',
    lastName: 'Flintstone',
    propertyAddress: {
      street: '3 Swann Rdg',
      city: 'Palmetto',
      state: 'GA',
      zip: '30268'
    }
  },
  {
    id: 2,
    firstName: 'Barney',
    lastName: 'Rubble',
    propertyAddress: {
      street: '23 Serenbe Ln',
      city: 'Palmetto',
      state: 'GA',
      zip: '30268'
    }
  },
  {
    id: 3,
    firstName: 'Bam Bam',
    lastName: 'Stonehenge'
  },
  {
    id: 4,
    firstName: 'Danny',
    lastName: 'Dino',
    propertyAddress: {
      street: '4445 Serenbe Ln',
      city: 'Palmetto',
      state: 'GA',
      zip: '30268'
    }
  }
];

export default function members(state = initialState) {
  return state;
}
