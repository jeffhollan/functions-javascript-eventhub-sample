# Azure Functions JavaScript Event Hubs Sample

## Pre-requisites

1. Have the Azure Functions core tools v2 installed
 - `npm i -g azure-functions-core-tools@core`
1. Have the [.NET Core 2.1 SDK installed](https://www.microsoft.com/net/download)

## Running the sample

1. Clone the repo
1. Open the folder (already has some settings optimized for VS Code with the Azure Functions extension)
1. Run `func extensions install` to download and pull in the Event Hubs extension
 > NOTE: since the repo already contains an `extensions.csproj` file, `func extensions sync` would work too
1. Rename `local.settings.json.example` to `local.settings.json` and fill in with actual connection strings
1. Open the `function.json` file under `EventHubTriggerJS` and make sure the `eventHubName` value matches your actual event hub name
1. Run the sample (`func start`)