const express = require('express')
const router = express();
const ApiRequest = require('../service/api_service')
const ApiConfig = require('../api/api_config')

router.get("/", (req, res) => {

    let access_token = req.query.access_token
    let count = req.query.count
    let page = req.query.page
    let id = req.query.id

    const path = ApiConfig.API_ROUTER_CONFIG.content_comments +
        '?access_token=' + access_token +
        '&count=' + count +
        '&page=' + page +
        "&id=" + id

    ApiRequest(
        ApiConfig.HOST_CONCIG.host,
        path,
        'get',
        null,
        (response, code) => {
            res.status(code).send(response)
        },
        (err) => {
            res.status(500).send(err)
        }
    )

})

module.exports = router;