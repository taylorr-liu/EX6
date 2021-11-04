const AWS = require('aws-sdk');
const { Request, Response } = require('softchef-utility');

exports.handler = async (e) => {
    const req = new Request(e);
    const res = new Response();

    try {
        const db = new AWS.DynamoDB.DocumentClient();
        console.log(request);

        await db.delete({
            TableName: 'items',
            Key: { itemId: req.parameter('itemId') }
        }).promise();

        return res.json({
            deleted: true
        });
    } catch (e) {
        return res.error(e);
    }
};