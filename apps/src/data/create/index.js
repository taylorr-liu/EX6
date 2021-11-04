const AWS = require('aws-sdk');
const { Request, Response } = require('softchef');

exports.handler = async (e) => {
    const request = new Request(e);
    const response = new Response();

    try {
        const db = new AWS.DynamoDB.DocumentClient();
        console.log(request);

        await db.put({
            TableName: 'items',
            Item: { itemId: request.input('itemId'), itemName: request.input('itemName') }
        }).promise();

        return response.json({
            created: true
        });
    } catch (e) {
        return response.error(e);
    }
};