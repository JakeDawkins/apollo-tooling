// Exports for consuming APIs
import "apollo-env";
// FIXME: The global fetch dependency comes from `apollo-link-http` and should be removed there.
import "apollo-env/lib/fetch/global";

export { getValidationErrors } from "./errors/validation";
export { ToolError } from "./errors/logger";
// TODO we have to keep this because we implement this class in `apollo`
export { LoadingHandler } from "./loadingHandler";

// projects
export { GraphQLProject } from "./project/base";
export { isClientProject, GraphQLClientProject } from "./project/client";
export { isServiceProject, GraphQLServiceProject } from "./project/service";

// GraphQLSchemaProvider
export {
  GraphQLSchemaProvider,
  schemaProviderFromConfig
} from "./providers/schema";

// Engine
export * from "./engine";

// Config
export * from "./config";

// Generated types
import * as graphqlTypes from "./graphqlTypes";
export { graphqlTypes };

// debug logger
export { Debug } from "./utilities";
