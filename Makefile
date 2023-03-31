build-prod:
	cd client && $(MAKE) build
	cd server && $(MAKE) build
run-prod: 
	docker-compose up