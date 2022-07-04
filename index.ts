import { markdownTable } from "markdown-table";
import result from "./result.json";

console.log(markdownTable([["Duration", "Total Tests", "State"]]));
result?.results[0]?.suites[0]?.suites[0]?.tests?.forEach((test) => {
  console.log(
    markdownTable([[test?.title, test?.duration?.toString(), test?.state]])
      .replace("| - | ---- | ------ |", "") // need to adapt if adding more columns
      .trim()
  );
});
