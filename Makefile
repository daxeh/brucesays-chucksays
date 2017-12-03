## Development only Makefile.
## Referenced and modified from mulitple sources (nanoninja,kreait)
## ---
## (c) 2017 .:hex ... ....- -..- --- .-. .. xǝɥ:.

include .env

.DEFAULT_GOAL := help

clean: ## make clean - Delete package directories and cache. Make install is required after.
	@rm -vrf $(APP_DUMPDIR)/*
	@rm -vrf vendor
	@rm -vrf node_modules
	@rm -v composer.lock
	@rm -v yarn.lock
	@rm -v *.log
	@yarn cache clean
	@composer -vvv clearcache

install: ## make install - Install Composer and NPM packages
	@composer install
	@yarn install

update: ## make update - Update Composer and NPM packages
	@composer update
	@yarn upgrade

start: ## make start - Start containers compose and sync, watch, mount
	@docker-sync-stack start
	@yarn run dev &
	@yarn run watch &
	@docker volume create --name=app_sync &
	@docker-compose -f docker-compose-dev.yml -f docker-compose.yml up

stop: ## make stop - Kill containers, delete, and unmount volumes
	@docker-sync-stack clean

test: ## make test - Run PHPUnit/XDebug in container
	@docker-compose exec -T php ./$(APP_WORKDIR)/vendor/bin/phpunit --colors=always --configuration ./$(APP_WORKDIR)

help: ## make help - Display help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

.PHONY: clean
