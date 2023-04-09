#Dockerfile vars
NODE_VERSION=14.18.1-alpine3.14
APP_VERSION=dev
ECR_REGION=ap-southeast-1
ECR_ID=513310362758
#vars
IMAGENAME=customer-dashboard
REPO=nusalogistics
IMAGEFULLNAME=513310362758.dkr.ecr.ap-southeast-1.amazonaws.com/${REPO}/${IMAGENAME}:${APP_VERSION}

.PHONY: help build run push publish

EXECUTABLES = docker aws
K := $(foreach cmd,$(EXECUTABLES),\
        $(if $(shell which $(cmd)),,$(error "$(cmd) not found in PATH, Please install $(cmd)")))

help:
	    @awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%30s\033[0m : %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

build: ## build image
	    @docker build --pull --force-rm --build-arg NODE_VERSION=${NODE_VERSION} --build-arg VITE_BASE_URL=${VITE_BASE_URL} --build-arg VITE_CLIENT_ID=${VITE_CLIENT_ID} --build-arg VITE_SECRET=${VITE_SECRET} --build-arg VITE_VERSION=1.0.0 --build-arg GENERATE_SOURCEMAP=false -t ${IMAGEFULLNAME} .

run:  build ## build and run image in local (running in port 3000)
			@docker-compose up

push: ## push image to ECR
			@$(aws ecr get-login --region ap-southeast-1 --registry-ids 513310362758 | sed 's/-e none //g')
	    @docker push ${IMAGEFULLNAME}

push2: ## push image to ECR using aws cli version 2
			@aws configure
			@$(aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 513310362758.dkr.ecr.ap-southeast-1.amazonaws.com | sed 's/-e none //g')
	    @docker push ${IMAGEFULLNAME}

deploy: 
	@ aws ec2 describe-instances --filters 'Name=tag:customer_name,Values=nusa' 'Name=tag:project_name,Values=nusalogistics' --query 'Reservations[].Instances[].PublicIpAddress' --out text > ip.txt
	@ aws ssm get-parameter --name /nusa/nusalogistics/dev/ssh_key --with-decryption --query "Parameter.Value" --out text > private_key.pem
	@ chmod 600 private_key.pem
	@ ssh -i private_key.pem ubuntu@`cat ip.txt` "cd ~/nusa/nusa-dev/customer-dashboard && ./redeploy.sh"

publish: build push ## build and push image to ECR
