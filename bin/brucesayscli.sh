#!/usr/bin/env bash

## local project deployment alias/functions
push() {
	git push heroku master
}

## this command charges dyno hours
scale() {
	heroku ps:scale web=1
}

## $1= addon name, see full list `heroku addons``
addons() {
	local addon="$1"

	[ -n "${addon}" ] || heroku addons && exit

	heroku addons:open "${addon}"
}

## $1= web|worker
serve() {
	local type="$1:-web"

	heroku local "${type}"
}

## optional: -a brucesays-chucksays
info() {
	heroku addons
	heroku config
	heroku apps:info
}

logs() {
	heroku logs --tail
}

## TODO: write main "$@"
