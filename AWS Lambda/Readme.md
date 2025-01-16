AWS Lambda Function: Upload Document to S3

This AWS Lambda function enables the upload of document or PDF files to an S3 bucket. The function is triggered by an event containing the file details.

Features

Uploads files to a specified S3 bucket.

Decodes base64-encoded file content.

Handles error scenarios for missing parameters or upload failures.

Prerequisites

An AWS account with necessary permissions for S3 and Lambda.

An existing S3 bucket.

Environment Variables

BUCKET_NAME: The name of the S3 bucket where files will be uploaded.

Input Event Structure

The input event should be a JSON object with the following keys:

{
    "fileName": "example.pdf",
    "fileContent": "<base64-encoded content>"
}

fileName: The name of the file to be uploaded (e.g., example.pdf).

fileContent: The base64-encoded content of the file.

Function Deployment

Package the function code into a .zip file.

Deploy the function using the AWS Management Console, AWS CLI, or an Infrastructure-as-Code tool (e.g., Terraform, AWS SAM).

Set the environment variable BUCKET_NAME for the Lambda function.

Example Usage

Send an event to the Lambda function with the required parameters:

{
    "fileName": "document.pdf",
    "fileContent": "VGhpcyBpcyBhIHRlc3QgZG9jdW1lbnQu"
}

Expected response:

{
    "statusCode": 200,
    "body": "File 'document.pdf' successfully uploaded to bucket '<BUCKET_NAME>'."
}

Error Handling

400 Bad Request: Returned if required parameters are missing or invalid.

500 Internal Server Error: Returned if the upload to S3 fails.

License