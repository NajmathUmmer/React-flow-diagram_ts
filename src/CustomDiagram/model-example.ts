
import { EntityState } from '../types';


const model: EntityState = [
  {
    height: 75,
    id: 'ja1lnjvx',
    linksTo: [
      {
        edited: true,
        label: 'Is friends with',
        points: [
          {
            x: 112.5,
            y: 112.5,
          },
          {
            x: 475,
            y: 112.5,
          },
          {
            x: 475,
            y: 150,
          },
        ],
        target: 'ja1lnkqu',
      },
      {
        edited: true,
        label: 'Eats',
        points: [
          {
            x: 112.5,
            y: 150,
          },
          {
            x: 112.5,
            y: 234.5,
          },
          {
            x: 212.5,
            y: 234.5,
          },
          {
            x: 212.5,
            y: 325,
          },
        ],
        target: 'ja1lnq90',
      },
    ],
    name: 'Gorilla',
    type: 'Task',
    width: 125,
    x: 50,
    y: 75,
  },
  {
    height: 50,
    id: 'ja1lnkqu',
    linksTo: [
      {
        edited: false,
        points: [
          {
            x: 475,
            y: 175,
          },
          {
            x: 393.75,
            y: 175,
          },
          {
            x: 393.75,
            y: 212.5,
          },
          {
            x: 375,
            y: 212.5,
          },
        ],
        target: 'ja1lnx2u',
      },
    ],
    name: 'Toucan',
    type: 'Event',
    width: 50,
    x: 450,
    y: 150,
  },
  {
    height: 75,
    id: 'ja1lnq90',
    name: 'Zebra',
    type: 'Task',
    width: 125,
    x: 150,
    y: 325,
  },
  {
    height: 75,
    id: 'ja1lnx2u',
    name: 'Jiraffe',
    type: 'Task',
    width: 125,
    x: 250,
    y: 175,
  },
];

export default model;
