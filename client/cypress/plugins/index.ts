// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// @ts-expect-error
import * as codeCov from "@cypress/code-coverage/task";

const pluginConfig: Cypress.PluginConfig = (
  _on: Cypress.PluginEvents,
  _config: Cypress.PluginConfigOptions
) => {
  /* do nothing */
  codeCov(_on, _config);
  return _config;
};

export default pluginConfig;
