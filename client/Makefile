# build: 
# 	docker build \ 
# 	-t nbz-client:production \
# 	--build-arg CADDYFILE=Caddyfile.prod \
# 	--build-arg BASE_URL=http://mysite.com \
# 	-f Dockerfile .


build-dev: 
	docker build -t nbz-client .

build-production: 
	docker build \
	-t nbz-client-prod:production \
	--build-arg CADDYFILE=Caddyfile.local \
	--build-arg BASE_URL=https://mysite.com \
	-f Dockerfile.production .

build-local: 
	docker build \
	 -t nbz-client-prod:local \
	 --build-arg CADDYFILE=Caddyfile.local \
	 --build-arg BASE_URL=http://localhost:8000 \
	 -f Dockerfile.production .