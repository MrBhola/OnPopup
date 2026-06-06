

module.exports = {
  packagerConfig: {
    name: process.env.GITHUB_RUN_NUMBER ? `OnPopup-${process.env.GITHUB_RUN_NUMBER}` : 'OnPopup',
    appBundleId: process.env.GITHUB_RUN_NUMBER ? `com.onpopup.app.run${process.env.GITHUB_RUN_NUMBER}` : 'com.onpopup.app',
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
        name: process.env.GITHUB_RUN_NUMBER ? `OnPopup-${process.env.GITHUB_RUN_NUMBER} Installation` : 'OnPopup Installation',
        icon: './assets/icon.icns',
        overwrite: true,
      },
    }
  ]
};
