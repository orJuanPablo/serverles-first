const AWS = require("aws-sdk");

const updateTask = async (e) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = e.pathParameters;
  const { done, title, description } = JSON.parse(e.body);

  try {
    await dynamodb
      .update({
        TableName: "TaskTable",
        Key: { id },
        UpdateExpression:
          "set done = :done,title= :title, description= :description",
        ExpressionAttributeValues: {
          ":done": done,
          ":title": title,
          ":description": description,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();
    return {
      status: 200,
      body: {
        message: "Tarea actualizada satisfactoriamente",
        data: { done, title, description },
      },
    };
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
module.exports = { updateTask };
