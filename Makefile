install:
	composer install
	yarn install
	yarn run dev

update:
	composer update
	yarn

start:
	docker volume create --name=app_sync
	docker-compose -f docker-compose-dev.yml up -d
	docker-sync start

stop:
	docker-compose stop
	docker-sync stop
