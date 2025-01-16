import json

def lambda_handler(event, context):
    # Extract numbers from the event
    number1 = event.get('number1')
    number2 = event.get('number2')
    
    if number1 is None or number2 is None:
        return {
            'statusCode': 400,
            'body': json.dumps('Please provide both numbers')
        }
    
    # Perform the addition
    result = number1 + number2
    
    return {
        'statusCode': 200,
        'body': json.dumps({'result': result})
    }
