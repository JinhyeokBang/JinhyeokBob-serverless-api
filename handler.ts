import { APIGatewayProxyResult } from "aws-lambda";
import { ArmyMeal } from 'army-meal'

export const mealapi = async (
  event: any
): Promise<APIGatewayProxyResult> => {
  const { year, month, day } = event.queryStringParameters;
  const meal = new ArmyMeal('API KEY')
  const menus = await meal.getMenusOfDay(9030, parseInt(year), parseInt(month), parseInt(day));

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        menus
      },
      null,
      2
    ),
  };
};
