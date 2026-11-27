import * as migration_20261127_192050_initial from './20261127_192050_initial';

export const migrations = [
  {
    up: migration_20261127_192050_initial.up,
    down: migration_20261127_192050_initial.down,
    name: '20261127_192050_initial'
  },
];
