const AWS = require("aws-sdk");

const deleteTask = async (e) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = e.pathParameters;

  try {
    await dynamodb
      .delete({
        TableName: "TaskTable",
        Key: { id },
      })
      .promise();
    return {
      status: 200,
      body: {
        message: "Tarea eliminada satisfactoriamente",
      },
    };
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
module.exports = { deleteTask };
