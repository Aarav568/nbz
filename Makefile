build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev: 
	docker-compose up

###

build-local:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

run-local:
	ENV=local docker-compose up

###

build-prod:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

run-prod:
	ENV=production docker-compose up