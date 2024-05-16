import { FlexPlugin } from '@twilio/flex-plugin';

const PLUGIN_NAME = 'DarkThemePlugin';

export default class DarkThemePlugin extends FlexPlugin {
  init(Flex, Manager) {
    const configuration = {
      theme: {
        isLight: false, // set to true for light theme
      }
  }

    // apply theme
    Manager.updateConfig(configuration);
  }
}


