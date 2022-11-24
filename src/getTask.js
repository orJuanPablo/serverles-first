const AWS = require("aws-sdk");
const getTask = async (e) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = e.pathParameters;
  const task = await dynamodb
    .get({
      TableName: "TaskTable",
      Key: { id },
    })
    .promise();
  return {
    status: 200,
    body: { task },
  };
};
module.exports = { getTask };
