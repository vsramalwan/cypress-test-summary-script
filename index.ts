import {markdownTable} from 'markdown-table'
import result from "./result.json";

result?.results[0]?.suites[0]?.suites[0]?.tests?.forEach(test => {
    console.log(markdownTable([
        ['Duration', 'Total Tests'],
        [test?.title, test?.duration?.toString()]
    ]))
});