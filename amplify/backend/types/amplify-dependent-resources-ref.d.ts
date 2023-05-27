export type AmplifyDependentResourcesAttributes = {
  "api": {
    "apiopticaadmin": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "opticaadminf85f3cb4f85f3cb4": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "clienteGroupRole": "string",
      "gerenteGroupRole": "string",
      "superadminGroupRole": "string",
      "vendedorGroupRole": "string"
    }
  },
  "function": {
    "opticaadminf85f3cb4f85f3cb4PostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "OpticaImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}