# slack-markdown-action
GitHub Action to convert markdown into Slack's mrkdwn. Basically just a wrapper of [tryfabric/mack](https://github.com/tryfabric/mack).

## Usage

### Inputs

* `text` - The title text to show.
* `changelog` - The changelog markdown text to convert.

### Outputs

* `payload` - The content payload for slackapi.
