const core = require('@actions/core');
const { markdownToBlocks } = require('@tryfabric/mack');

try {
    const md = core.getInput('text', {required: true});
    const mrkdwn = markdownToBlocks(md);
    core.setOutput("text", mrkdwn);
} catch (error) {
    core.setFailed(error.message);
}
