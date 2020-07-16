module.exports = {
  name: 'section-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/section/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
