import {getInput, setOutput, setFailed } from "@actions/core"
import { markdownToBlocks } from '@tryfabric/mack';

const run = async () => {
    try {
        const text = getInput('text');
        const changelog = getInput('changelog', {required: true});
        const blocks = await markdownToBlocks(changelog);
        const payload = {
            text: text,
            blocks: blocks,
        }
        setOutput("payload", JSON.stringify(payload));
    } catch (e) {
        if (e instanceof Error) {
            setFailed(e.message);
        }  
    }
}

run()