# Nusa Customer Dashboard

## Overview

This service act as customer web.
Main feature of this service are:
- Customer authentication
- View and download invoice
- View tracking

## Deployment

Service dependencies:
- NodeJS version 14.18.1

Service configuration:

| Name | Description | Mandatory |
| ---- | ----------- | --------- |
| VITE\_BASE\_URL | Base URL of webserv service. Example: http://localhost:8080/webserv | true |
| VITE\_CLIENT\_ID | App client ID. Please refer to webserv/seed.sql | true |
| VITE\_SECRET | App client secret. Please refer to webserv/seed.sql | true |


## Running service
- `yarn`
- `yarn start`
- Access `http://localhost:3001`

## Running Service With Docker
Make sure docker is installed in your machine.  
Build: `make build`  
Run: `make run`

