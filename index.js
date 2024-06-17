const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function main() {
    try {
        var result = [];
        var remoteHost = "https://api.mrsuricate.com";
        var email = core.getInput('email');
        var password = core.getInput('password');
        var campaignIds = core.getInput('campaign_ids');

        if (!campaignIds) {
            throw new Error('Missing campaignIds');
        }

        var response1 = await axios.post(remoteHost+'/api-v2/auth/login', {
            email: email,
            password: password
        });
        var token = response1.data.token;

        // TODO
        /*var response2 = await axios.get(remoteHost+'/api-v2/auth/me', {
            headers: {
                'Authorization': 'Bearer '+token
            }
        });

        var user = response1.data;
        var customerId = user.customers[0].id;*/

        // TODO Optimize this using parallelling promises
        for (var campaignId of campaignIds.split(',')) {
            var response3 = await axios.post(remoteHost+'/campaigns/'+campaignId+'/play', {
            }, {
                headers: {
                    'Authorization': 'Bearer '+token
                }
            });
            result.push(response3.data.id);
        }
        core.setOutput("result", JSON.stringify(result));
    } catch (error) {
        core.setFailed(error.message);
    }
};

main();