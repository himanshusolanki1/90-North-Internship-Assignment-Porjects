import json
import boto3
import base64
import os

def lambda_handler(event, context):
    """
    AWS Lambda function to store a document or PDF file in an S3 bucket.

    Args:
        event (dict): Contains the input data for the function. Expected keys:
            - "fileName": The name of the file to be stored (e.g., "document.pdf").
            - "fileContent": The base64-encoded content of the file.
        context (object): Lambda runtime context (not used here).

    Returns:
        dict: Response indicating success or failure.
    """

    # Environment variable for the S3 bucket name
    BUCKET_NAME = os.environ['BUCKET_NAME']

    # Parse the input data
    try:
        file_name = event['fileName']
        file_content_base64 = event['fileContent']

        # Decode the base64 content
        file_content = base64.b64decode(file_content_base64)
    except KeyError as e:
        return {
            'statusCode': 400,
            'body': json.dumps(f"Missing parameter: {str(e)}")
        }
    except Exception as e:
        return {
            'statusCode': 400,
            'body': json.dumps(f"Error parsing input data: {str(e)}")
        }

    # Initialize the S3 client
    s3 = boto3.client('s3')

    # Upload the file to S3
    try:
        s3.put_object(Bucket=BUCKET_NAME, Key=file_name, Body=file_content)
        return {
            'statusCode': 200,
            'body': json.dumps(f"File '{file_name}' successfully uploaded to bucket '{BUCKET_NAME}'.")
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f"Error uploading file to S3: {str(e)}")
        }
