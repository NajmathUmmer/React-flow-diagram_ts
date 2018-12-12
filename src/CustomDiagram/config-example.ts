import Event from './event/component';
import eventIcon from './event/icon';
import Task from './task/component';
import taskIcon from './task/icon';

const config = {
  entityTypes: {
      Event: {
        height: 50,
        width: 50,
      },
    Task: {
      height: 75,
      width: 125,
    },
  },
  gridSize: 25,
};

const customEntities = {
    Event: {
      component: Event,
      icon: eventIcon,
    },
  Task: {
    component: Task,
    icon: taskIcon,
  },
};

export { config, customEntities };