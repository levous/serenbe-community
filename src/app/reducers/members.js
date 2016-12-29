const initialState = [
  {
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
    firstName: 'Bam Bam',
    lastName: 'Stonehenge'
  },
  {
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
