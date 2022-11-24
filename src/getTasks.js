const AWS = require("aws-sdk");
const getTasks = async (e) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tasks = await dynamodb
    .scan({
      TableName: "TaskTable",
    })
    .promise();
  return {
    status: 200,
    body: { tasks },
  };
};
module.exports = { getTasks };
