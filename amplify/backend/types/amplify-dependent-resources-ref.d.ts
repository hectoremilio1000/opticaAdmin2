export type AmplifyDependentResourcesAttributes = {
  "api": {
    "opticaadmin": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "apioticapool": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "gerenteGroupRole": "string",
      "superadminGroupRole": "string",
      "vendedorGroupRole": "string"
    }
  },
  "function": {
    "apioticapoolPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "opticaImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}