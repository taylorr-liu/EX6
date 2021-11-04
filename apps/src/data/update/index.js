const AWS = require('aws-sdk');
const { Request, Response } = require('softchef-utility');

exports.handler = async (e) => {
    const req = new Request(e);
    const res = new Response();

    try {
        const db = new AWS.DynamoDB.DocumentClient();

        const data = await db.update({
            TableName: 'items',
            Key: {
                itemId: req.paramenter('itemId')
            },
            UpdateExpression: 'set itemName = :itemName',
            ExpressionAttributeValues: {
                ':itemName': request.input('itemName')
            }
        }).promise();
        if (!data) {
            return res.error('Not found', 404);
        }
        console.log(res);
        return res.json({ updated: true });
    } catch (e) {
        return res.error(e);
    }
};