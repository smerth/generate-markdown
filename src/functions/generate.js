import options from "../options/options";
import { createContent } from "./create-content";
import { deleteContent } from "./delete-content";

deleteContent(options.basePath);
createContent(options);
