const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addTask = async (e) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const id = v4();
  const { title, description } = JSON.parse(e.body);
  const createAt = new Date();

  const newTask = { id, title, description, createAt: createAt.toString() };

  await dynamodb.put({ TableName: "TaskTable", Item: newTask }).promise();
  return {
    status: 200,
    body: JSON.stringify(newTask),
  };
};
module.exports = { addTask };
