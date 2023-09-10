const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;//port
const {DateTime} = require ('luxon');//date and time

app.get ('/get_info', (req, res) => {
    //parse query params
    const slackName = req.query.slack_name;
    const track = req.query.track;
    //get current day of the week
    const currentDay = DateTime.now().toFormat('cccc');
    //get utc time
    const utcTime = DateTime.utc().toISO();


//JSON RESPONSE
const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: '',
    github_repo_url: '',
    status_code: 200
}

res.json(response);
});

//start the express server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})