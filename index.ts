import * as pulumi from "@pulumi/pulumi";

import * as temporalcloud from "@pulumi/temporalcloud";

const workshopNamespace = new temporalcloud.Namespace("workshopNamespace", {
    regions: ["aws-us-east-1"],
    retentionDays: 7,
    apiKeyAuth: true,
    name: "juneworkshop"
})

