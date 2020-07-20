module.exports = {
  name: 'state-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/state/layout',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
