

module.exports = {
  packagerConfig: {
    name: 'OnPopup',
    executableName: 'OnPopup',
    appBundleId: 'com.onpopup.app',
    asar: true,
    icon: './assets/icon',
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'onpopup',
        setupIcon: './assets/icon.ico',
        setupExe: 'OnPopupSetup.exe',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        name: 'OnPopup Installation',
        icon: './assets/icon.icns',
        overwrite: true,
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          bin: 'OnPopup'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          bin: 'OnPopup'
        }
      },
    }
  ]
};
