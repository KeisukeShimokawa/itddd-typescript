import type { Circus } from "@jest/types";
import type {
  JestEnvironmentConfig,
  EnvironmentContext,
} from "@jest/environment";
import { TestEnvironment } from "jest-environment-node";

class CustomEnvironment extends TestEnvironment {
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    // console.log(config.globalConfig);
    // console.log(config.projectConfig);

    // @ts-expect-error
    this.testPath = context.testPath;
    // @ts-expect-error
    this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    console.log("setup");
    await super.setup();
  }

  async teardown() {
    console.log("teardown");
    await super.teardown();
  }

  getVmContext() {
    console.log("getVmContext");
    return super.getVmContext();
  }

  async handleTestEvent(event: Circus.Event) {
    console.log(event.name);
  }
}

export default CustomEnvironment;
